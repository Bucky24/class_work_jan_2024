const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;

    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    }).then((result) => {
        return result.json();
    }).then((data) => {
        window.location = "/";
    });
});