function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function getexpDate(){
  const frontEnd = document.getElementById('frontendexp');
  const frontendDate = new Date('2024-10-31');
  const frontendMonth = frontendDate.getMonth();
  const frontendYear = frontendDate.getFullYear();

  //current Date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  //calculate Front End
  const frontendMonthdif = (currentYear - frontendYear)* 12 + (currentMonth - frontendMonth);
  frontEnd.textContent = frontendMonthdif + ' Months';
}

// visible on scroll
const thresholdTime = 0.1;
document.addEventListener('DOMContentLoaded', () => {
  const fadeTexts = document.querySelectorAll('.section__text__p1');

  const observerOptions = {
    threshold: thresholdTime, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class
      } else {
        entry.target.classList.remove('visible'); // Optional: Remove class when out of view
      }
    });
  }, observerOptions);

  fadeTexts.forEach((text) => observer.observe(text));
});
document.addEventListener('DOMContentLoaded', () => {
  const fadeTexts = document.querySelectorAll('.title');

  const observerOptions = {
    threshold: thresholdTime, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class
      } else {
        entry.target.classList.remove('visible'); // Optional: Remove class when out of view
      }
    });
  }, observerOptions);

  fadeTexts.forEach((text) => observer.observe(text));
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeTexts = document.querySelectorAll('.section-container');

  const observerOptions = {
    threshold: thresholdTime, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class
      } else {
        entry.target.classList.remove('visible'); // Optional: Remove class when out of view
      }
    });
  }, observerOptions);

  fadeTexts.forEach((text) => observer.observe(text));
});
document.addEventListener('DOMContentLoaded', () => {
  const fadeTexts = document.querySelectorAll('#experience');

  const observerOptions = {
    threshold: thresholdTime, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class
      } else {
        entry.target.classList.remove('visible'); // Optional: Remove class when out of view
      }
    });
  }, observerOptions);

  fadeTexts.forEach((text) => observer.observe(text));
});
document.addEventListener('DOMContentLoaded', () => {
  const fadeTexts = document.querySelectorAll('#projects');

  const observerOptions = {
    threshold: thresholdTime, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class
      } else {
        entry.target.classList.remove('visible'); // Optional: Remove class when out of view
      }
    });
  }, observerOptions);

  fadeTexts.forEach((text) => observer.observe(text));
});
document.addEventListener('DOMContentLoaded', () => {
  const fadeTexts = document.querySelectorAll('#contact');

  const observerOptions = {
    threshold: thresholdTime, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class
      } else {
        entry.target.classList.remove('visible'); // Optional: Remove class when out of view
      }
    });
  }, observerOptions);

  fadeTexts.forEach((text) => observer.observe(text));
});


getexpDate();
window.onload = getexpDate;