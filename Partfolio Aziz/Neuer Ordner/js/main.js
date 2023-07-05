// Show Menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');


// Menu Show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

// Menu Close
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

// Remove Menu Mobile

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// SWIPER PROJECTS

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// EMAIL JS

const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactProject = document.getElementById('contact-project'),
  contactMessage = document.getElementById('contact-message') ;

const sendEmail = (e) =>{
  e.preventDefault();

  // Check of teh field has a value

  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    // Add and remove color

    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');
     
    // Show message

    contactMessage.textContent = 'Write all the input fields 📩 ';
  }else{
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_u9krsbj', 'template_22wzq6s', '#contact-form', '6_b3qx5Ky5A8YgvBo')
       .then(() =>{
        // Show message and add color
        contactMessage.classList.add('color-blue');
        contactMessage.textContent = ' Message sent  ✅';

        // Renome message after five seconds

      setTimeout(() =>{
        contactMessage.textContent ='';

          }, 5000)
       }, (error) =>{
        alert('OOPS! SOMETHING HAS FAILED...', error );
       })

      //  To clear the input field
      contactName.value = ''
      contactEmail.value = ''
      contactProject.value =''

  }
   
}

contactForm.addEventListener('submit', sendEmail)

// SHOW SCROLL UP

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scroLLY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
