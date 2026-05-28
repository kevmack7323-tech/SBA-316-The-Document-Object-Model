
const loginFormContainer = document.getElementById("pContainer");
loginFormContainer.style.color = "white";
loginFormContainer.style.backgroundColor= "black"; 

document.querySelector("#Forgot").addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
        window.alert("Check Your Spaceship's Digital Serial Number For Galaxy Code")
        const password = document.getElementById("password")
        password.focus();
})






