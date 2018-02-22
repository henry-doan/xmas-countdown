var xmasDate = new Date('12/25/18 12:00:00 AM')
var milisecond = 1000
var minute = milisecond * 60
var hour = minute * 60
var day = hour * 24

function countDown() {
  var currentTime = new Date()
  var timeLeft = xmasDate - currentTime.getTime()
  if (timeLeft < 0) {
    clearInterval(timer)
    document.getElementById('display').innerHTML =
      "It's Christmas!"
    return
  }

  var seconds = Math.floor((timeLeft % minute) / milisecond)
  var mins = Math.floor((timeLeft % hour) / minute)
  var hrs = Math.floor((timeLeft % day) / hour)
  var days = Math.floor(timeLeft / day)
  var months = xmasDate.getMonth() - currentTime.getMonth()

  if (document.getElementById('display')) {
    document.getElementById('display').innerHTML = 
      + days + " days "
      + hrs + " hours "
      + mins + " minutes " 
      + seconds + " seconds " + " Til Christmas";
  }

  if (document.getElementById('monthDisplay')) {
    document.getElementById('monthDisplay').innerHTML = months + ' months until Xmas'
  }

  if (document.getElementById('dayDisplay')) {
    document.getElementById('dayDisplay').innerHTML = days + ' days until Xmas'
  }

  if (document.getElementById('hrDisplay')) {
    document.getElementById('hrDisplay').innerHTML = Math.floor(days * 24) + ' hours until Xmas'
  }

  if (document.getElementById('minDisplay')) {
    document.getElementById('minDisplay').innerHTML = Math.floor((days * 24) * 60) + ' minutes until Xmas'
  }

}

var timer = setInterval(countDown, 1000);