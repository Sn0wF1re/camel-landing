let mobileMenuVisible = false;

const toggleMenu = () => {
  mobileMenuVisible = !mobileMenuVisible;
  const mobileToggle = document.querySelector(".nav-toggle");
  const mainMenu = document.querySelector(".mobi-main-menu");

  mobileToggle.classList.toggle("toggle-active");
  mainMenu.classList.toggle("menu-active", mobileMenuVisible);
};

document.querySelector(".nav-toggle").addEventListener("click", toggleMenu);
const updateCountdown = () => {
  const endDate = new Date('2024-02-07T18:00:00Z');
  const currentDate = new Date();
  
  const timeDifference = endDate - currentDate;
  
  if (timeDifference <= 0) {
    // Countdown reached zero, stop the interval
    clearInterval(intervalId);
    return;
  }
  
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));  
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  // Update the HTML elements with the calculated values
  document.getElementById('hrs').textContent = hours < 10 ? `0${hours}` : hours;
  document.getElementById('mins').textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById('secs').textContent = seconds < 10 ? `0${seconds}` : seconds;
};

// Initial call to set the initial values
updateCountdown();

// Set up an interval to update the countdown every second
const intervalId = setInterval(updateCountdown, 1000);