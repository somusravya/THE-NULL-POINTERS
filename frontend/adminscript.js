document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    const switchToSignup = document.getElementById("switch-to-signup");
    const switchToLogin = document.getElementById("switch-to-login");

    loginBtn.addEventListener("click", function() {
        loginForm.classList.add("active-form");
        signupForm.classList.remove("active-form");
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    });

    signupBtn.addEventListener("click", function() {
        signupForm.classList.add("active-form");
        loginForm.classList.remove("active-form");
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    });

    switchToSignup.addEventListener("click", function(e) {
        e.preventDefault();
        signupForm.classList.add("active-form");
        loginForm.classList.remove("active-form");
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    });

    switchToLogin.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.classList.add("active-form");
        signupForm.classList.remove("active-form");
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    });
});
