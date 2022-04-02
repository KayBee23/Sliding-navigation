const navList = document.querySelector(".nav-list");
const btn = document.querySelector(".fas");
const open = document.querySelector(".active");
const close = document.querySelector(".disabled");

open.addEventListener("click", () => {
  if (!navList.classList.contains("open")) {
    navList.classList.remove('close')
    navList.classList.add("open");
    open.style.display = 'none';
    close.style.display = "block";
  } else {

    open.style.display = "block";
    close.style.display = "none";
    
  }
});

close.addEventListener("click", () => {
  if (!navList.classList.contains("close")) {
    navList.classList.remove("open");
    navList.classList.add("close");
    open.style.display = "block";
    close.style.display = "none";
  } else {
    open.style.display = "none";
    close.style.display = "block";
    
  }
});
