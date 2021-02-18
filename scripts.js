//start

// nav toggle

const  menu = document.querySelector(".open")
const  close = document.querySelector(".close")
const  navList = document.querySelector(".nav-list")

// adding class of active

menu.addEventListener("click" , ()=> navList.classList.add("active"))

// removing class of active
close.addEventListener("click" , ()=> navList.classList.remove("active"))






console.log(menu , close , navList)