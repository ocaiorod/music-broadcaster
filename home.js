const formOpenBtn = document.querySelector("#form-open");
const emailInput = document.querySelector("#loginEmail");
const pwInput = document.querySelector("#loginPassword");
const form = document.querySelector(".login_form");
const button = document.querySelector('.buttonLogin');
home = document.querySelector(".home");
formContainer = document.querySelector(".form_container");
formCloseBtn = document.querySelector(".form_close");
signupBtn = document.querySelector("#signup");
loginBtn = document.querySelector("#login");
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});


let adminEmail = "admin@admin.com"
let adminPw = "admin"

const Verification = () => { 
    button.disabled = true;

    const validate = () => {
            const emailValue = emailInput.value;
            const pwValue = pwInput.value;
            
            if (emailValue !== "" && pwValue !== "") {
                button.style.opacity = "1";
            } else {
                button.style.opacity = ".2";
            }

            if (emailValue == "admin@" && pwValue == "admin") {
                button.disabled = false;
            } else {
                button.disabled = true;;
            }
        };


        emailInput.addEventListener("input", validate);
        pwInput.addEventListener("input", validate);
}

Verification();
