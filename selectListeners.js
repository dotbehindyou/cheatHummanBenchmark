const listeners = (function listAllEventListeners() {
  let elements = [];
  const allElements = document.querySelectorAll('*');
  const types = [];
  for (let ev in window) {
    if (/^on/.test(ev)) types[types.length] = ev;
  }

  for (let i = 0; i < allElements.length; i++) {
    const currentElement = allElements[i];
    for (let j = 0; j < types.length; j++) {
      if (typeof currentElement[types[j]] === 'function') {
        elements.push({
          "node": currentElement,
          "listeners": [ {
            "type": types[j],
            "func": currentElement[types[j]].toString(),
          }]
        });
      }
    }
  }

  return elements.filter(element => element.listeners.length)
})();