

const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const message = document.getElementById('message');


form.addEventListener('submit', function(e) {
    e.preventDefaul
    const fullNameValue = fullName.value;
    const messageValue = message.value;
    const emailValue = email.value;
    
    localStorage.setItem('full-name', fullNameValue);
    localStorage.setItem('message', messageValue);
    localStorage.setItem('email', emailValue);