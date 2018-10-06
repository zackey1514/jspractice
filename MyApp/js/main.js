(function() {
  'use strict'

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');
  console.log(reset)

  function checkInput() {
    if (
      price.value.match(/^[1-9][0-9]*$/) !== null &&
      num.value.match(/^[1-9][0-9]*$/) !== null
    ) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled')
    }
  }

  btn.addEventListener('click', function() {
    var payLess;
    var short;
    var payMore;
    var over;
    var str;
    if (this.classList.contains('disabled') === true ) {
      return;123
    }
    payLess = Math.floor(price.value / num.value / unit.value) * unit.value;
    short = price.value - (payLess * num.value);
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
    over = Math.abs(price.value - (payMore * num.value));
    if (over === 0 && short === 0) {
      str = '一人 ' + (price.value / num.value) + ' 円ちょうどです！';

    } else {
      str =
        '一人 ' + payLess + ' 円だと' + short + ' 円足りません。' +
        '一人 ' + payMore + ' 円だと' + over + ' 円余ります。';
    }
    result.textContent = str;
    reset.classList.remove('hidden')
  });

  price.addEventListener('keyup', checkInput);
  num.addEventListener('keyup', checkInput);

  reset.addEventListener('click', function() {
    result.textContent = "結果を表示";
    price.value = '';
    num.value = '';
    unit.value = '';
    btn.classList.add('disable');
    this.classList.add('hidden');
    price.focus();
  });
  price.focus();
})();
