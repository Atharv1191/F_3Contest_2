//Play Alert Audio when times up!..................
function playAlertSound() {
    alertSound.currentTime = 0; // Rewind to the beginning of the audio
    alertSound.play();
  }
  
  function stopTimer(index) {
    clearInterval(timers[index].intervalId);
    timers[index].intervalId = null; //Indicate that timer is stop here.....
    //timers.splice(index, 1);
    updateTimersDisplay();
  }
  
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("stop-timer-btn")) {
      const index = parseInt(event.target.dataset.index);
      stopTimer(index);
    }
  });
  
  function createTimer(totalSeconds) {
    const timer = {
      remainingTime: totalSeconds,
      intervalId: null,
    };
  
    timer.intervalId = setInterval(() => {
      timer.remainingTime--;
  
      if (timer.remainingTime <= 0) {
        clearInterval(timer.intervalId);
        timerEndDisplay.textContent = "Timer Is Up !";
        timerEndDisplay.style.display = "block";
        playAlertSound();
        setTimeout(() => {
          //timerEndDisplay.style.display = "none";
          activeTimersDisplay.style.display = "none";
        }, 2000); // Hide the timer end display after 5 seconds
        setTimeout(() => {
          timerEndDisplay.style.display = "none";
          //activeTimersDisplay.style.display = "none";
        }, 2000);
      }
  
      updateTimersDisplay();
    }, 1000);
  
    timers.push(timer);
    updateTimersDisplay();
  }