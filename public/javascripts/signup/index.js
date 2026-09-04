const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const clonePassword = document.getElementById('clonePassword');
const signup = document.getElementById('signup');
const userName = document.getElementById('name');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signup.addEventListener('submit', (e) => {
    e.preventDefault();
    const gender = document.querySelector('input[name="gender"]:checked').dataset.gender;

    if(userName.value && emailRegex.test(email.value)){
        if(age.value >= 18){
            if(password.value.length >= 8 && password.value === clonePassword.value){
                fetch(`http://localhost:3000/sign-up`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: userName.value,
                        email: email.value,
                        age: age.value,
                        password: password.value,
                        gender
                    })
                })
                .then(res => res.json())
                .then(res => res.ok ? location.href = 'sign-in' : '')
                .catch(err => console.error(err));
            } 
        } 
    } 
});

userName.addEventListener('change', (e) => {
    if(e.target.value.length < 3){
        userName.classList.add('error');
    } else {
        userName.classList.remove('error');
    }
});

email.addEventListener('change', (e) => {
    if(!emailRegex.test(e.target.value)){
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }
});

age.addEventListener('change', (e) => {
    if(e.target.value < 18){
        age.classList.add('error');
    } else {
        age.classList.remove('error');
    }
});

password.addEventListener('change', (e) => {
    if(e.target.value.length < 8){
        password.classList.add('error');
    } else {
        password.classList.remove('error');
    }
});

clonePassword.addEventListener('change', (e) => {
    if(e.target.value !== password.value){
        clonePassword.classList.add('error');
    } else {
        clonePassword.classList.remove('error');
    }
});