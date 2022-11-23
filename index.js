const closeBtn = document.querySelector(".image");
closeBtn.addEventListener("click", ()=>{
  document.querySelector(".mobile-menu").setAttribute("style", "display:none");
})

const humburgerIcon = document.querySelector(".toggler-img");
humburgerIcon.addEventListener("click", ()=>{
  document.querySelector(".mobile-menu").setAttribute("style", "display:flex");
})

  