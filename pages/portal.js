
const loginFormContainer = document.getElementById("pContainer");
loginFormContainer.style.color = "yellow";
loginFormContainer.style.display = "flex";
loginFormContainer.style.justifyContent = "center";
loginFormContainer.style.alignItems = "center";
loginFormContainer.style.height = "100vh"
loginFormContainer.style.width = "100vw"
loginFormContainer.style.backgroundImage = "url('../images/greenport.gif')"
loginFormContainer.style.backgroundPosition = "center"
loginFormContainer.style.backgroundRepeat = "no-repeat";
loginFormContainer.style.backgroundSize = "cover";
loginFormContainer.style.backgroundPosition = "center";
loginFormContainer.style.backgroundAttachment = "fixed";

const zContainer = document.getElementById("zContainer");
const firstKid = zContainer.firstElementChild;

zContainer.style.display = "flex";
zContainer.style.flexDirection = "column";
zContainer.style.width = "100%";
zContainer.style.height = "auto"
zContainer.style.alignItems = "center";
zContainer.style.margin = "20px";
zContainer.style.backgroundColor = "rgba(0, 0, 0, 0.75)"
zContainer.style.border = "2px solid #93ff65"
zContainer.style.borderRadius = "12px"
zContainer.style.boxShadow = "0 0 20px rgba(0, 255, 204, 0.5)"
zContainer.style.width = "380px";
zContainer.style.padding = "30px"



document.querySelector("#Forgot").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.alert("Check Your Spaceship's Digital Serial Number For Galaxy Code")
    const password = document.getElementById("password")
    password.focus();
});



firstKid.addEventListener("mouseover", function (e) {
    firstKid.style.color = "lightGreen";
});

firstKid.addEventListener("click", function (e) {
    firstKid.textContent = "Choose Galaxy Wisely"

    const passwordInput = document.getElementById("password");
    passwordInput.setAttribute("placeholder", "Enter 10+ character code")
});




const portalForm = document.querySelector(".container")

portalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const inputValues = portalForm.querySelectorAll("input")
    let isFormValid = true;

    for (let i = 0; i < inputValues.length; i++) {
        const currentInput = inputValues[i];

        if (!currentInput.checkValidity()) {
            isFormValid = false;
            currentInput.reportValidity();

            break;
        }
    }
    if (isFormValid) {
        window.open("https://github.com/kevmack7323-tech/SBA-316-The-Document-Object-Model/tree/main")
    }
});




const portalTwo = document.createElement("div");
document.getElementById("pContainer").appendChild(portalTwo);
portalTwo.style.backgroundImage = "url('../images/goodbye.gif')"
portalTwo.style.height = "250px"
portalTwo.style.width = "150px"
portalTwo.style.borderRadius = "50%"
portalTwo.style.backgroundPosition = "center"

const fragment = document.createDocumentFragment();
fragment.appendChild(portalTwo);


















