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


getexpDate();
window.onload = getexpDate;