(function() {
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');
  var startTime;
  var timeLeft;
  var timeToCountdown = 0;
  var timerId;
  var isRunning = false;

  function updateTimer(t) {
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    var timerString;
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timerString = m + ":" + s + "."  + ms;
    timer.textContent = timerString
    document.title = timerString;
  }

  function countDown() {
    timerId = setTimeout(function() {
      timeLeft = timeToCountdown - (Date.now() - startTime);
      if (timeLeft < 0) {
        clearTimeout(timerId);
        timeLeft = 0;
        timeToCountdown = 0;
        updateTimer(timeLeft);
        start.textContent = 'Start';
        isRunning = false;
        return;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function() {
    if (isRunning) {
      start.textContent = 'Start';
      timeToCountdown = timeLeft;
      clearTimeout(timerId);
      isRunning = false;
    } else {
      start.textContent = 'Stop';
      startTime = Date.now();
      countDown();
      isRunning = true;
    }
  });

  min.addEventListener('click', function() {
    if (isRunning) {
      return;
    }
    timeToCountdown += 60 * 1000;
    if (timeToCountdown > 60 * 60 * 1000) {
      timeToCountdown = 0;
    }
    updateTimer(timeToCountdown);
  });

  sec.addEventListener('click', function() {
    if (isRunning) {
      return;
    }
    timeToCountdown += 1000;
    if (timeToCountdown > 60 * 60 * 1000) {
      timeToCountdown = 0;
    }
    updateTimer(timeToCountdown);
  });

  reset.addEventListener('click', function() {
    timeToCountdown = 0;
    updateTimer(timeToCountdown);
  });

})();
