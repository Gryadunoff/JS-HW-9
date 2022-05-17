var userTime = prompt('Введите сигнал таймера в формате чч:мм').split(':');


var clock = setInterval(function () {
  var date = new Date();
  document.getElementById('clock').innerHTML = date.toLocaleTimeString();
  ourTime = date.toLocaleTimeString().split(':');

  if (ourTime[0] == userTime[0] && ourTime[1] == userTime[1]) {
    alert ('Вставай!')
    return clearInterval(clock)
  }
}, 1000);


