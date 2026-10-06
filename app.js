(() => {
  'use strict';
  const banks = {page1: window.GIS_QUESTIONS, page2: window.GIS_PAGE2_QUESTIONS, page3: window.GIS_PAGE3_QUESTIONS, page4: window.GIS_PAGE4_QUESTIONS, lesson3page1: window.GIS_LESSON3_PAGE1_QUESTIONS};
  const pages = {
    page1: {name: 'Page 1', title: 'GIS introduction & hardware', storage: 'gis-study-club-page1-scope-v6', description: 'GIS introduction, the five component names, and hardware categories.'},
    page2: {name: 'Page 2', title: 'Software, People, Methods & Data', storage: 'gis-study-club-page2-keynotes-v2', description: 'Software, People, Methods, and Data.', topics: ['Software & GUI', 'People', 'Methods', 'Data & sources']},
    page3: {name: 'Page 3', title: 'GIS Functions', storage: 'gis-study-club-page3-tasks-v3', description: 'The 5 Ms, management tasks, project goals, GIS limitations, and geographic layers.', topics: ['The 5 Ms', 'Management tasks', 'Project goals & limitations', 'Geographic layers']},
    page4: {name: 'Page 4', title: 'GIS question types & tasks', storage: 'gis-study-club-page4-mc-v3', quickCount: 15, description: 'Six GIS question types and three regular GIS tasks. All questions are multiple choice.', topics: ['Six question types', 'Location vs. Condition', 'Three regular GIS tasks']},
    lesson3page1: {name: 'Lesson 3 · Page 1', lesson: 3, lessonTitle: 'Data and Information', title: 'Data and Information', storage: 'gis-study-club-lesson3-page1-v1', description: 'Data vs. information, datum vs. data, mapping changes, computers, and the path from data to action.', topics: ['Data vs. information', 'Datum vs. data', 'Mapping & computers', 'From data to action']}
  };
  let activePage = 'page1';
  let bank = banks[activePage];
  const $ = id => document.getElementById(id);
  const labels = {mc: 'Multiple choice', tf: 'True or false', fill: 'Identification', enum: 'Enumeration'};
  let storageKey = 'gis-study-club-page1-scope-v6';
  let round = [], index = 0, responses = [], revealed = false, mode = 'quick', retryPool = [];
  const {normalize, checkEnumeration} = window.GIS_QUIZ_UTILS;
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
  function start(count, pool = bank, newMode = count === bank.length ? 'full' : 'quick') {
    mode = newMode;
    const selection = mode === 'quick'
      ? (pages[activePage].quickCount ? shuffle(pool).slice(0, pages[activePage].quickCount) : [...['mc','tf','fill'].flatMap(type => shuffle(pool.filter(q => q.type === type)).slice(0, 5)), ...pool.filter(q => q.type === 'enum')])
      : shuffle(pool).slice(0, count);
    round = shuffle(selection).map(q => ({...q, options: q.type === 'mc' ? shuffle(q.options) : q.options}));
    index = 0; responses = []; revealed = false;
    display('quiz'); renderQuestion();
  }
  function renderQuestion() {
    revealed = false;
    const q = round[index];
    $('session-name').textContent = labelsForMode();
    $('question-count').textContent = `Question ${index + 1} of ${round.length}`;
    $('progress').max = round.length; $('progress').value = index + 1;
    $('type-label').textContent = labels[q.type]; $('topic-label').textContent = q.topic;
    $('question-text').textContent = q.prompt;
    $('answer-hint').textContent = q.type === 'fill' ? 'Identify the term being described. Capitalization, punctuation, and extra spaces do not matter.' : q.type === 'tf' ? 'Decide whether the statement is true or false.' : 'Choose one answer, then click Next to check it.';
    $('answer-controls').innerHTML = q.type === 'enum'
      ? `<fieldset class="answers" aria-labelledby="question-text"><legend class="sr-only">Enter ${q.terms.length} answers</legend>${q.terms.map((term, i) => `<div class="enum-field"><label for="component-${i}">${escape(q.entryLabel)} ${i + 1}</label><input class="fill-input enum-input" id="component-${i}" type="text" placeholder="Type one ${escape(q.entryLabel.toLowerCase())}" autocomplete="off" spellcheck="false" maxlength="100" aria-describedby="answer-hint component-status-${i} validation"><span id="component-status-${i}" class="component-status"></span></div>`).join('')}</fieldset>`
      : q.type === 'fill'
      ? '<label class="sr-only" for="fill-answer">Your answer</label><input class="fill-input" id="fill-answer" type="text" placeholder="Type your answer here…" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="200" aria-labelledby="question-text" aria-describedby="answer-hint validation">'
      : `<fieldset class="answers" aria-labelledby="question-text"><legend class="sr-only">Choose an answer</legend>${q.options.map((option, i) => `<label class="answer-option"><input type="radio" name="answer" value="${i}" aria-describedby="validation"><span>${escape(option)}</span></label>`).join('')}</fieldset>`;
    if (q.type === 'enum') {
      $('answer-hint').textContent = `Type one ${q.entryLabel.toLowerCase()} per box, in any order. No repeated answers. All ${q.terms.length} correct = one point. You may leave unknown answers blank.`;
    }
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
    const entries = q.type === 'enum' ? [...document.querySelectorAll('.enum-input')].map(input => input.value.trim()) : null;
    const value = entries ? entries.map((entry, i) => `${i + 1}. ${entry || '(blank)'}`).join('; ') : q.type === 'fill' ? $('fill-answer').value.trim() : selected ? q.options[Number(selected.value)] : '';
    if (entries && entries.every(entry => !normalize(entry))) {
      $('validation').textContent = `Type at least one ${q.entryLabel.toLowerCase()} first. Sulayi lang!`;
      $('component-0').focus();
      return;
    }
    if (!normalize(value)) {
      $('validation').textContent = q.type === 'fill' ? 'Type an answer first. Sulayi lang!' : 'Choose an answer first. Sulayi lang!';
      if (q.type === 'fill') $('fill-answer').focus();
      return;
    }
    $('validation').textContent = '';
    const enumeration = entries ? checkEnumeration(q, entries) : null;
    const correct = enumeration ? enumeration.correct : matches(q, value);
    responses.push({id: q.id, value, correct}); revealed = true;
    document.querySelectorAll('#answer-controls input').forEach(input => {
      input.disabled = true;
      if (q.type === 'mc' || q.type === 'tf') {
        if (q.options[Number(input.value)] === q.answer) input.closest('label').classList.add('correct');
        else if (input.checked) input.closest('label').classList.add('incorrect');
      }
    });
    $('feedback').className = `feedback${correct ? '' : ' wrong'}`;
    $('feedback').innerHTML = `<strong>${correct ? '✓ Sakto! You got it.' : '↺ Not quite. Here’s the idea.'}</strong><p>Correct answer: <b>${escape(q.answer)}</b></p><p class="explanation">${escape(q.explanation)}</p>`;
    if (enumeration) {
      enumeration.items.forEach((item, i) => {
        const status = {correct: '✓ Correct', duplicate: `↺ Repeated ${q.entryLabel.toLowerCase()}`, incorrect: '✗ Incorrect answer', blank: '— No answer'}[item.status];
        $('component-status-' + i).textContent = status;
        $('component-' + i).classList.add(item.status === 'correct' ? 'enum-correct' : 'enum-wrong');
      });
      $('feedback').innerHTML += enumeration.missing.length ? `<p><b>Missing ${q.missingLabel || (q.entryLabel === 'Category' ? 'categories' : 'components')}:</b> ${escape(enumeration.missing.join(', '))}</p>` : '';
    }
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
    $('results').innerHTML = `<div class="section-kicker"><span class="status-dot"></span> ROUND COMPLETE</div><section class="results-card"><span class="result-icon" aria-hidden="true">✦</span><h2 id="result-title" tabindex="-1" style="margin-top:16px">${title}</h2><div class="result-score">${score}<small> / ${round.length}</small></div><p class="result-message">${percent}% correct · ${labelsForMode()}</p><p class="result-message">${message}</p><div class="breakdown">${(bank.every(q => q.type === 'mc') ? ['mc'] : ['mc','tf','fill','enum']).map(type => { const ids = new Set(round.filter(q => q.type === type).map(q => q.id)); const n = responses.filter(r => ids.has(r.id) && r.correct).length; return `<div><strong>${ids.size ? `${n}/${ids.size}` : '—'}</strong><span>${labels[type]}</span></div>`; }).join('')}</div><div class="result-actions">${missed.length ? '<button class="primary" id="retry">Practice mistakes →</button>' : ''}<button class="${missed.length ? 'secondary' : 'primary'}" id="again">New shuffled round ↻</button><button class="secondary" id="result-home">Study home</button></div><p class="history-note">${escape(stats)}<br>Saved only on this browser when storage is available.</p></section><section class="review-list"><h2>Your answer review</h2><p class="muted">Open a question to revisit its answer and explanation.</p>${round.map((q, i) => { const r = responses[i]; return `<details class="review-item"><summary>${r.correct ? '✓' : '↺'} ${i+1}. ${escape(q.prompt)}</summary><p>Your answer: ${escape(r.value)}</p><p>Correct answer: <b>${escape(q.answer)}</b></p><p>${escape(q.explanation)}</p></details>`; }).join('')}</section>`;
    display('results'); $('result-title').focus({preventScroll: true});
    if ($('retry')) $('retry').addEventListener('click', () => start(retryPool.length, retryPool, 'retry'));
    $('again').addEventListener('click', () => start(Number(document.querySelector('input[name="length"]:checked').value)));
    $('result-home').addEventListener('click', () => { display('home'); $('start').focus({preventScroll:true}); });
  }
  function labelsForMode() { return pages[activePage].name + ' · ' + (mode === 'retry' ? 'Mistake practice' : mode === 'full' ? 'Full review' : 'Quick refresh'); }
  const firstPageNotes = $('study-notes').innerHTML;
  const firstPageTopics = $('study-topics').innerHTML;
  function selectPage(page) {
    activePage = page;
    bank = banks[page];
    const config = pages[page];
    $('lesson-number').textContent = String(config.lesson || 2).padStart(2, '0');
    $('lesson-title').textContent = config.lessonTitle || 'Introduction to GIS';
    document.title = 'GIS Study Club — Lesson ' + (config.lesson || 2) + ' Practice';
    storageKey = config.storage;
    const enums = bank.filter(q => q.type === 'enum').length;
    const multipleChoiceOnly = bank.every(q => q.type === 'mc');
    const quickCount = config.quickCount || (['mc','tf','fill'].reduce((sum, type) => sum + Math.min(5,bank.filter(q => q.type === type).length),0) + enums);
    const quick = document.querySelector('input[name="length"][data-mode="quick"]');
    const full = document.querySelector('input[name="length"][data-mode="full"]');
    quick.value = quickCount; full.value = bank.length;
    $('quick-description').textContent = quickCount + (multipleChoiceOnly ? ' questions · multiple choice' : enums ? ' questions · includes all lists' : ' questions · 5 of each type');
    $('full-description').textContent = bank.length + ' questions · selected page only';
    $('bank-count').textContent = bank.length + ' questions · ' + config.name;
    $('page-description').textContent = config.name + ': ' + config.description + ' Questions stay within this topic.';
    $('study-label').textContent = config.name + ' · ' + config.title;
    $('setup-note').textContent = multipleChoiceOnly ? 'Multiple choice only. No timer.' : enums ? (enums === 1 ? 'The enumeration question is included in each round.' : 'All ' + enums + ' enumeration questions are included in each round.') + ' No timer.' : 'Identification, true or false, and multiple choice. No timer.';
    $('tf-format').hidden = !bank.some(q => q.type === 'tf');
    $('fill-format').hidden = !bank.some(q => q.type === 'fill');
    $('enumeration-format').hidden = !enums;
    $('study-topics').innerHTML = config.topics ? config.topics.map((topic, i) => `<p><span>0${i + 1}</span> ${escape(topic)}</p>`).join('') : firstPageTopics;
    $('study-notes').innerHTML = page === 'page1' ? firstPageNotes : $(page + '-notes').innerHTML;
    round = []; responses = []; retryPool = [];
  }
  document.querySelectorAll('input[name="study-page"]').forEach(input => input.addEventListener('change', () => selectPage(input.value)));
  selectPage(document.querySelector('input[name="study-page"]:checked').value);
  $('start').addEventListener('click', () => start(Number(document.querySelector('input[name="length"]:checked').value)));
  $('exit').addEventListener('click', () => {
    if (confirm('Return to the study home? This unfinished round will not be saved.')) { display('home'); $('start').focus({preventScroll:true}); }
  });
})();
