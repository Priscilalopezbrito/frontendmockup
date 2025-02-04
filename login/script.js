const links = document.querySelectorAll(".link");
const forms = document.querySelector(".forms");
const showHide = document.querySelectorAll(".hide-show");

showHide.forEach(showicon=>{
    showicon.addEventListener("click", ()=>{
        let field_password = showicon.parentElement.parentElement.querySelectorAll(".password");

        field_password.forEach(password=>{
            if(password.type === 'password'){
                password.type = 'text';
                showicon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                showicon.classList.replace("bx-show", "bx-hide");
            }
        })
    })
})

links.forEach(link =>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        forms.classList.toggle("Show-Signup");
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".btn button"); // Select the login button
    const logoutButton = document.querySelector("#logoutBtn"); // Select the logout button

    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default form submission
            window.location.href = "../dashboard/html/Billmapmainpage.html";
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            window.location.href = "../../login/login.html";
        });
    }
});

