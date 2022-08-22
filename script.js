// Set the date we're counting down to
var countDownDate = new Date("Nov 5, 2022 00:00:00").getTime();
// console.log(countDownDate);
var now = new Date().getTime();
var remainingTime = countDownDate - now;
let epochTime = countDownDate / 1000;
// let remainingTimeInSecs = remainingTime / 1000;

// Update the count down every 1 second
// var countdownUpdate = setInterval(function () {
//   // Get today's date and time

//   // Find the time remaining between now and the count down date

//   // Time calculations for days, hours, minutes and seconds
//   var calculatedDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//   var calculatedHours = Math.floor(
//     (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   var calculatedMinutes = Math.floor(
//     (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
//   );
//   var calculatedSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//   //Output our results
//   var days = document.querySelector(".days");
//   var hours = document.querySelector(".hours");
//   var minutes = document.querySelector(".minutes");
//   var seconds = document.querySelector(".seconds");

//   days.innerHTML = calculatedDays;
//   hours.innerHTML = calculatedHours;
//   minutes.innerHTML = calculatedMinutes;
//   seconds.innerHTML = calculatedSeconds;

//   // If the count down is over, write some text
//   if (remainingTime < 0) {
//     clearInterval(countdownUpdate);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

// 1667606400

// let timer_ = 16000819919;
// new Flipdown(timer_).start();
// console.log(remainingTime);
// console.log(`1667689200`);
// console.log(countDownDate / 1000);
// new FlipDown(1667689200).start();
new FlipDown(epochTime).start();
