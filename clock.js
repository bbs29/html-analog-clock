let clockElement = document.querySelector("#analogClock");

const timer = () => {
  const date = new Date();
  
  let ms = date.getMilliseconds();
  let seconds = date.getSeconds() + ms/1000;
  let minutes = date.getMinutes() + seconds/60;
  let hours = date.getHours() + minutes/60;
  
  if(hours > 12) {
    hours = hours-12;
  }
  

  
  const offset = -90;
  
  
  clockElement.style.setProperty("--seconds", offset + 6 * seconds + "deg");
    clockElement.style.setProperty("--minutes", offset + 6 * minutes + "deg");
    clockElement.style.setProperty("--hours", offset + 30 * hours + "deg");
  
  requestAnimationFrame(timer)
}

timer();
