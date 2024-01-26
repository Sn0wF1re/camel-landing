let mobileMenuVisible = false;

const toggleMenu = () => {
  mobileMenuVisible = !mobileMenuVisible;
  const mobileToggle = document.querySelector(".nav-toggle");
  const mainMenu = document.querySelector(".mobi-main-menu");

  mobileToggle.classList.toggle("toggle-active");
  mainMenu.classList.toggle("menu-active", mobileMenuVisible);
};

document.querySelector(".nav-toggle").addEventListener("click", toggleMenu);

// Add this JavaScript code to your main.js

// Function to update the countdown
const updateCountdown = () => {
  const endDate = new Date('2024-01-31T00:00:00'); // Replace with your actual end date
  const currentDate = new Date();

  const timeDifference = endDate - currentDate;

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
setInterval(updateCountdown, 1000);

