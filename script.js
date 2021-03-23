const octoberFirst = '1 Oct 2021';

function countdown(){
  const octoberFirstDate = new Date(octoberFirst);
  const currentDate = new Date();
  
  const totalSeconds = (octoberFirstDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  console.log( days, hours, minutes, seconds);
  

  const daysLeft = document.getElementById('days');
  daysLeft.textContent = days;
  const hoursLeft = document.getElementById('hours');
  hoursLeft.textContent = hours;
  const minsLeft = document.getElementById('mins');
  minsLeft.textContent = minutes;
  const secondsLeft = document.getElementById('seconds');
  secondsLeft.textContent = seconds;


}

countdown();

setInterval(countdown, 1000);