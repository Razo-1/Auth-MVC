const signin = document.getElementById('signin');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signin.addEventListener('submit',(e) => {
    e.preventDefault();

    if(emailRegex.test(email.value) && password.value.length >= 8){
        fetch(`http://localhost:3000/sign-in`,{
            method : 'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify({
                email : email.value,
                password : password.value
            })
        })
        .then(res => res.json())
        .then(res => res.ok ? location.href = `/app/users/:${res.id}` : '')
        .catch(rej => console.log(rej))
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