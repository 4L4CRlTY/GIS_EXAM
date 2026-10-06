(() => {
  'use strict';
  const bank = window.GIS_QUESTIONS;
  const $ = id => document.getElementById(id);
  const labels = {mc: 'Multiple choice', tf: 'True or false', fill: 'Fill in the blank'};
  const storageKey = 'gis-study-club-essential-v2';
  let round = [], index = 0, responses = [], revealed = false, mode = 'quick', retryPool = [];
  const normalize = value => String(value).normalize('NFKC').toLowerCase().trim().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function matches(question, value) {
    return [question.answer, ...(question.aliases || [])].some(answer => normalize(answer) === normalize(value));
  }
  function display(name) {
    ['home', 'quiz', 'results'].forEach(id => { $(id).hidden = id !== name; });
    window.scrollTo({top: 0, behavior: 'instant'});
  }
  function start(count, pool = bank, newMode = count > 15 ? 'full' : 'quick') {
    mode = newMode;
    const selection = mode === 'quick'
      ? ['mc','tf','fill'].flatMap(type => shuffle(pool.filter(q => q.type === type)).slice(0, 5))
      : shuffle(pool).slice(0, count);
    round = shuffle(selection).map(q => ({...q, options: q.type === 'mc' ? shuffle(q.options) : q.options}));
    index = 0; responses = []; revealed = false;
    display('quiz'); renderQuestion();
  }
  function renderQuestion() {
    revealed = false;
    const q = round[index];
    $('session-name').textContent = mode === 'retry' ? 'Mistake practice' : mode === 'full' ? 'Full review' : 'Quick refresh';
    $('question-count').textContent = `Question ${index + 1} of ${round.length}`;
    $('progress').max = round.length; $('progress').value = index + 1;
    $('type-label').textContent = labels[q.type]; $('topic-label').textContent = q.topic;
    $('question-text').textContent = q.prompt;
    $('answer-hint').textContent = q.type === 'fill' ? 'Type the missing answer. Capitalization, punctuation, and extra spaces do not matter.' : q.type === 'tf' ? 'Decide whether the statement is true or false.' : 'Choose one answer, then click Next to check it.';
    $('answer-controls').innerHTML = q.type === 'fill'
      ? '<label class="sr-only" for="fill-answer">Your answer</label><input class="fill-input" id="fill-answer" type="text" placeholder="Type your answer here…" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="200" aria-labelledby="question-text" aria-describedby="answer-hint validation">'
      : `<fieldset class="answers" aria-labelledby="question-text"><legend class="sr-only">Choose an answer</legend>${q.options.map((option, i) => `<label class="answer-option"><input type="radio" name="answer" value="${i}" aria-describedby="validation"><span>${escape(option)}</span></label>`).join('')}</fieldset>`;
    $('validation').textContent = ''; $('feedback').hidden = true; $('feedback').innerHTML = '';
    $('next').textContent = 'Next →'; $('action-hint').textContent = 'Take your time. Think it through.';
    $('question-text').focus({preventScroll: true});
  }
  $('answer-form').addEventListener('submit', event => {
    event.preventDefault();
    if (revealed) {
      if (index === round.length - 1) finish();
      else { index++; renderQuestion(); window.scrollTo({top: 0, behavior: 'instant'}); }
      return;
    }
    const q = round[index];
    const selected = document.querySelector('input[name="answer"]:checked');
    const value = q.type === 'fill' ? $('fill-answer').value.trim() : selected ? q.options[Number(selected.value)] : '';
    if (!normalize(value)) {
      $('validation').textContent = q.type === 'fill' ? 'Type an answer first. Sulayi lang!' : 'Choose an answer first. Sulayi lang!';
      if (q.type === 'fill') $('fill-answer').focus();
      return;
    }
    $('validation').textContent = '';
    const correct = matches(q, value);
    responses.push({id: q.id, value, correct}); revealed = true;
    document.querySelectorAll('#answer-controls input').forEach(input => {
      input.disabled = true;
      if (q.type !== 'fill') {
        if (q.options[Number(input.value)] === q.answer) input.closest('label').classList.add('correct');
        else if (input.checked) input.closest('label').classList.add('incorrect');
      }
    });
    $('feedback').className = `feedback${correct ? '' : ' wrong'}`;
    $('feedback').innerHTML = `<strong>${correct ? '✓ Sakto! You got it.' : '↺ Not quite. Here’s the idea.'}</strong><p>Correct answer: <b>${escape(q.answer)}</b></p><p class="explanation">${escape(q.explanation)}</p>`;
    $('feedback').hidden = false;
    $('next').textContent = index === round.length - 1 ? 'See my results →' : 'Continue →';
    $('action-hint').textContent = 'Read the explanation, then continue.';
    $('feedback').scrollIntoView({behavior:'smooth', block:'nearest'});
  });
  function remember(score) {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
      const stats = parsed && typeof parsed === 'object' ? parsed : {};
      const rounds = Number.isSafeInteger(stats.rounds) && stats.rounds >= 0 ? stats.rounds + 1 : 1;
      const previousBest = Number.isInteger(stats.bestFull) && stats.bestFull >= 0 && stats.bestFull <= bank.length ? stats.bestFull : 0;
      const bestFull = mode === 'full' ? Math.max(score, previousBest) : previousBest;
      localStorage.setItem(storageKey, JSON.stringify({rounds, bestFull}));
      return `${rounds} completed round${rounds === 1 ? '' : 's'} in this browser.${mode === 'full' ? ` Best full review: ${bestFull}/${bank.length}.` : ''}`;
    } catch { return 'Browser storage is unavailable. You can still repeat every quiz.'; }
  }
  function finish() {
    const score = responses.filter(r => r.correct).length;
    const missed = responses.filter(r => !r.correct);
    retryPool = missed.map(r => bank.find(q => q.id === r.id));
    const percent = Math.round(score / round.length * 100);
    const title = score === round.length ? 'Every answer, understood.' : percent >= 70 ? 'You’re making connections.' : 'Every round is a fresh start.';
    const message = missed.length ? `You have ${missed.length} question${missed.length === 1 ? '' : 's'} to revisit. Practice them again, then try a new round.` : 'Perfect for this round! Try another shuffled round to strengthen your recall.';
    const stats = remember(score);
    $('results').innerHTML = `<div class="section-kicker"><span class="status-dot"></span> ROUND COMPLETE</div><section class="results-card"><span class="result-icon" aria-hidden="true">✦</span><h2 id="result-title" tabindex="-1" style="margin-top:16px">${title}</h2><div class="result-score">${score}<small> / ${round.length}</small></div><p class="result-message">${percent}% correct · ${labelsForMode()}</p><p class="result-message">${message}</p><div class="breakdown">${['mc','tf','fill'].map(type => { const ids = new Set(round.filter(q => q.type === type).map(q => q.id)); const n = responses.filter(r => ids.has(r.id) && r.correct).length; return `<div><strong>${ids.size ? `${n}/${ids.size}` : '—'}</strong><span>${labels[type]}</span></div>`; }).join('')}</div><div class="result-actions">${missed.length ? '<button class="primary" id="retry">Practice mistakes →</button>' : ''}<button class="${missed.length ? 'secondary' : 'primary'}" id="again">New shuffled round ↻</button><button class="secondary" id="result-home">Study home</button></div><p class="history-note">${escape(stats)}<br>Saved only on this browser when storage is available.</p></section><section class="review-list"><h2>Your answer review</h2><p class="muted">Open a question to revisit its answer and explanation.</p>${round.map((q, i) => { const r = responses[i]; return `<details class="review-item"><summary>${r.correct ? '✓' : '↺'} ${i+1}. ${escape(q.prompt)}</summary><p>Your answer: ${escape(r.value)}</p><p>Correct answer: <b>${escape(q.answer)}</b></p><p>${escape(q.explanation)}</p></details>`; }).join('')}</section>`;
    display('results'); $('result-title').focus({preventScroll: true});
    if ($('retry')) $('retry').addEventListener('click', () => start(retryPool.length, retryPool, 'retry'));
    $('again').addEventListener('click', () => start(Number(document.querySelector('input[name="length"]:checked').value)));
    $('result-home').addEventListener('click', () => { display('home'); $('start').focus({preventScroll:true}); });
  }
  function labelsForMode() { return mode === 'retry' ? 'Mistake practice' : mode === 'full' ? 'Full review' : 'Quick refresh'; }
  $('start').addEventListener('click', () => start(Number(document.querySelector('input[name="length"]:checked').value)));
  $('exit').addEventListener('click', () => {
    if (confirm('Return to the study home? This unfinished round will not be saved.')) { display('home'); $('start').focus({preventScroll:true}); }
  });
})();
