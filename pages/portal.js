
const loginFormContainer = document.getElementById("pContainer");
loginFormContainer.style.color = "white";
loginFormContainer.style.backgroundColor= "black"; 
loginFormContainer.style.display = "flex";
loginFormContainer.style.justifyContent = "center";
loginFormContainer.style.alignItems= "center";

document.querySelector("#Forgot").addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
        window.alert("Check Your Spaceship's Digital Serial Number For Galaxy Code")
        const password = document.getElementById("password")
        password.focus();
})

const zContainer = document.getElementById("zContainer");
const firstKid = zContainer.firstElementChild;

zContainer.style.display = "flex";
zContainer.style.flexDirection = "column";
zContainer.style.width = "100%";
zContainer.style.alignItems= "center";
zContainer.style.margin = "20px";

firstKid.addEventListener("mouseover", function(e){
   firstKid.style.color = "pink"; 
})





