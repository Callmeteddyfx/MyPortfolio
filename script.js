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

 document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
 });

document.getElementById('contact_info_send').addEventListener('click', () => {
  const sendThrough = document.getElementById('send_through').value;
  const messageValue = document.getElementById('message').value.trim();

  if (sendThrough == 'email'){
    if (messageValue) {
    document.getElementById('contact-form').submit();
    setTimeout(() =>{
      document.getElementById('message').value = '';
    }, 1000);
  } else {
    alert('Message field is empty');
  }
  } else {
const smsLink = `sms:+12508800572?body=${messageValue}`;
window.location.href = smsLink;  
  }
}
 );


getexpDate();
window.onload = getexpDate;