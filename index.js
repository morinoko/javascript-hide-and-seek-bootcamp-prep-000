function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}

function increaseRankBy(n) {
  let rankedItems = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedItems.length; i++) {
    let rank = parseInt(rankedItems[i].innerHTML);
    rankedItems[i].innerHTML = rank + n;
  }
}

function deepestChild() {
  let grandNode = document.querySelector('div#grand-node');
  let current = grandNode.children;
  let next;
  while (current) .length >= 1) {
    next = current[0].children;
    current = next;
    if (current.length === 0) {
      return current.innerHTML;
    }
  }
}