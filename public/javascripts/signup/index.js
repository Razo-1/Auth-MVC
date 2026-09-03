const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const clonePassword = document.getElementById('clonePassword');
const sigup = document.getElementById('sigup');


sigup.addEventListener('submit',(e) => {
    e.preventDefault()
    const gender = document.querySelector('input[name="gender"]:checked').dataset.gender

})

email.addEventListener('change',(e) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(e.target.value)){
        email.classList.add('error');
    }else{
        email.classList.remove('error');
    }
})

age.addEventListener('change',(e) => {
    
    if(e.target.value < 18){
        age.classList.add('error');
    }else{
        age.classList.remove('error');
    }
})

password.addEventListener('change',(e) => {
    
    if(e.target.value.length < 8){
        password.classList.add('error');
    }else{
        password.classList.remove('error');
    }
})


clonePassword.addEventListener('change',(e) => {
    
    if(e.target.value !==  password.value){
        clonePassword.classList.add('error');
    }else{
        clonePassword.classList.remove('error');
    }
})