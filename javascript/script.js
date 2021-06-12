let toggleButton = document.getElementById('toggleButton');
let navbarLinks = document.getElementById('navbarLinks');

toggleButton.addEventListener('click', function(){
  navbarLinks.classList.toggle('active');
})


let nika = document.getElementById('nika');
let nikaInfo = document.getElementById('nikaInfo');

nika.addEventListener('click', function(){
  nikaInfo.classList.toggle('use');
})