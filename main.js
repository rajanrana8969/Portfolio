 let menu = document.querySelector("#menu-icon");
 let navbar = document.querySelector(".navbar");

 menu.onclick = () =>{
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
 }

 window.onscroll =() => {
    menu.classList.remove("fa-xmark");
    navbar.classList.remove("active");
 }

   const typed = new Typed(".multiple-text", {
      strings: ["Frontend Developer",  "Web Designer", ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop:true,
      });
