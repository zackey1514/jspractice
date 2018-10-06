(function() {
  'use strict';

  var result = document.getElementById('result');
  var btn = document.getElementById('btn');
  var board = document.getElementById('board');
  var SIZE = 3;

  function createBox(n) {
    var box;
    box = document.createElement('div');
    box.className = 'box'
    return box;
  }

  for (var i = 0; i < SIZE * SIZE; i++) {
    board.appendChild(createBox(i));
  }
})();
