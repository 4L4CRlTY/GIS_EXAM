/* Shared answer checking; enumeration order does not matter. */
(() => {
  const normalize = value => String(value).normalize('NFKC').toLowerCase().trim().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
  function checkEnumeration(question, values) {
    const seen = new Set();
    const items = values.map(value => {
      const term = question.terms.find(term => [term.name, ...(term.aliases || [])].some(alias => normalize(alias) === normalize(value)));
      const status = !normalize(value) ? 'blank' : !term ? 'incorrect' : seen.has(term.name) ? 'duplicate' : 'correct';
      if (term) seen.add(term.name);
      return {value, name: term?.name, status};
    });
    const missing = question.terms.filter(term => !seen.has(term.name)).map(term => term.name);
    return {items, missing, correct: values.length === question.terms.length && items.every(item => item.status === 'correct') && missing.length === 0};
  }
  const api = {normalize, checkEnumeration};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else window.GIS_QUIZ_UTILS = api;
})();
