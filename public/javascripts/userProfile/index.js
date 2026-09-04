const logout = document.getElementById('logout');


logout.addEventListener('click', (e) => {
    const id = window.location.pathname.split('/').pop();    
    fetch(`http://localhost:3000/logout/${id}`,{
        method : 'POST',
        headers : { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(res => res.ok ? location.href = '/sign-in' : '')
    .catch(rej => console.log(rej))
})