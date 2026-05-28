
const loginFormContainer = document.getElementById("pContainer");
loginFormContainer.style.color = "yellow";
loginFormContainer.style.backgroundColor = "white";
loginFormContainer.style.display = "flex";
loginFormContainer.style.justifyContent = "center";
loginFormContainer.style.alignItems = "center";
loginFormContainer.style.height="100vh"
loginFormContainer.style.width="100vw"
loginFormContainer.style.backgroundImage= "url('../images/portal.gif')"


document.querySelector("#Forgot").addEventListener("click", function (e) {
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
zContainer.style.width = "50%";
zContainer.style.height= "50%"
zContainer.style.alignItems = "center";
zContainer.style.margin = "20px";
zContainer.style.backgroundColor = ""
zContainer.style.border= ""

firstKid.addEventListener("mouseover", function (e) {
    firstKid.style.color = "pink";
})





