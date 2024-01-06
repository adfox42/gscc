document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countDownDate = new Date('Apr 20, 2024 00:00:00').getTime();

  // Update the countdown every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements with class="until__numeric"
    document.querySelector('.until__numeric--days').innerHTML = days;
    document.querySelector('.until__numeric--hours').innerHTML = hours;
    document.querySelector('.until__numeric--minutes').innerHTML = minutes;
    document.querySelector('.until__numeric--seconds').innerHTML = seconds;

    // If the countdown is finished, display some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.container').innerHTML = 'Grand Opening!';
    }
  }, 1000);
});
