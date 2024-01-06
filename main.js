document.addEventListener('DOMContentLoaded', function () {
  // Whatever the determined Grand Opening date is will go here.
  var countDownDate = new Date('Apr 20, 2024 00:00:00').getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.until__numeric--days').innerHTML = days;
    document.querySelector('.until__numeric--hours').innerHTML = hours;
    document.querySelector('.until__numeric--minutes').innerHTML = minutes;
    document.querySelector('.until__numeric--seconds').innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.container').innerHTML = 'Grand Opening!';
    }
  }, 1000);
});
