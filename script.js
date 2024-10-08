let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header .nav_container nav a [href*=' + id + ']').classList.add ('active');
          })
      }
  })
};


  
menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  function zoomImage(img) {
    img.classList.toggle("zoomed");
}

function downloadPDF() {
  var pdfUrl = 'Resume D.pdf';
  
  var a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'IuriMedulashviliCv.pdf';
  
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


  