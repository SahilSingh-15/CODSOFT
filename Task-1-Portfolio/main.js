/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======MENU SHOW =====*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*======MENU HIDDEN =====*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link,we remove the show-menu c 
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))



/*=============== SHADOW HEADER ===============*/
const shadowHeader =() =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height ,add the shaddow-header class to the
    this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)




/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_wwgo69e', 'template_59n3f6j', '#contact-form', '31_HRZTX4yI7NddlT')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
    }, (error) => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        console.error('Failed to send email:', error);
    });
}

contactForm.addEventListener('submit', sendEmail);
