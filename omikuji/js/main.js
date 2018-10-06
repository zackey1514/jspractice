(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var results = ['大吉', '中吉' , '凶', '中吉']
    var n = Math.floor(Math.random() * results.length)
    this.textContent = results[n]

    this.textContent = result;
  });

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });

  btn.addEventListener('mouseup', function() {
    this.className = '';
  });


})();
