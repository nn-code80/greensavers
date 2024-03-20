
const accordionTitles = document.querySelectorAll('.accordion-title')



accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
const height = accordionTitle.nextElementSibling.scrollHeight;
accordionTitle.classList.toggle('active-header');
if (accordionTitle.classList.contains('active-header')){
accordionTitle.nextElementSibling.style.height = `${height}px`;
accordionTitle.nextElementSibling.style.opacity = '1';    
} else{
    accordionTitle.nextElementSibling.style.height = `0px`;
    accordionTitle.nextElementSibling.style.opacity = '0';
}
    })
})

// the scroll-up button

const myButton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// dropdown

const toggle = document.querySelector(".toggle-button");
const dropdown = document.querySelector('.dropdown');
const hamburger = document.querySelector('.hamburger');

toggle.addEventListener("click", ()=>{
dropdown.classList.toggle("active");
hamburger.classList.toggle("active");
})

// email function
function sendMail(event){
    event.preventDefault()
    let parms = {
        name: document.getElementById("first").value,
        last: document.getElementById("last").value,
        emails: document.getElementById("emails").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,

    }
  

    emailjs.send("service_72h41ds","template_aoove3j",parms).then(alert("Email Sent!!")); 
}

const form = document.getElementById("myform");
form.addEventListener("submit", sendMail);



// Dropdown menu








// toggle.addEventListener('click', () => {
    // navbar.classList.toggle('active');
    // hamburger.classList.toggle('open');