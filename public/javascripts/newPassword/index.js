const change = document.getElementById('change');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmePassword = document.getElementById('confirmePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


change.addEventListener('submit',(e) => {
    e.preventDefault();

    const isReady =
    emailRegex.test(email.value)
    && 
    password.value.trim().length >= 8 
    && 
    password.value === confirmePassword.value;

    if(isReady){
        fetch(`http://localhost:3000/new-password`,{
            method : 'POST',
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify({
                email : email.value,
                newPassword : password.value
            })
        })
        .then(res => res.json())
        .then(res => res.ok ? location.href = 'sign-in' : '')
        .catch(err => console.error(err));
    }

})


email.addEventListener('change',(e) => {
    if(!emailRegex.test(emailRegex)){
        email.classList.add('error');
    }else{
        email.classList.remove('error');
    }
})


password.addEventListener('change',(e) => {
    if(e.target.value.length < 8){
        password.classList.add('error');
    }else{
        password.classList.remove('error');
    }
})

confirmePassword.addEventListener('change',(e) => {
    if(e.target.value === password.value){
        password.classList.add('error');
    }else{
        password.classList.remove('error');
    }
})