const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/posts');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFomrHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#sign-username').value.trim();
    const email = document.querySelector('#sign-email').value.trim();
    const password = document.querySelector('#sign-password').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if(response.ok) {
            document.location.replace('/posts');
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFomrHandler);