const formOpenBtn = document.querySelector("#form-open");
const emailInput = document.querySelector("#loginEmail");
const pwInput = document.querySelector("#loginPassword");
const regUser = document.querySelector("#regUser");
const regEmail = document.querySelector("#regEmail");
const regCreatePw = document.querySelector("#regCreatePw");
const regConfirmPw = document.querySelector("#regConfirmPw");
const regTerms = document.querySelector("#regTerms");
const form = document.querySelector(".login_form");
const button = document.querySelector('.buttonLogin');
const button2 = document.querySelector('.buttonRegister');
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

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


const Verification = () => { 
    button.disabled = true;

    const validate = () => {
            const emailValue = emailInput.value;
            const pwValue = pwInput.value;
            
            if (emailValue !== "" && pwValue !== "") {
                button.style.opacity = "1";
                button.style.cursor = "pointer";
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


const RegisterVerification = () => { 
    button2.disabled = true;

    const Registered = () => {
        formContainer.classList.remove("active")
    }

    const regValidate = () => {
            const regUserValue = regUser.value;
            const regEmailValue= regEmail.value;
            const regCreatePwValue = regCreatePw.value;
            const regConfirmPwValue = regConfirmPw.value;
            const termsChecked = regTerms.checked;
            
            if (regUserValue !== "" && regEmailValue !== "" && regCreatePwValue !== "" && regConfirmPwValue !== "" && regCreatePwValue === regConfirmPwValue && termsChecked) {
                button2.disabled = false;
                button2.style.opacity = "1";
                button2.style.cursor = "pointer";
                button2.addEventListener("click", Registered)
            } else {
                button2.disabled = true;
                button2.style.opacity = ".2";
            }

        };


        regUser.addEventListener("input", regValidate);
        regEmail.addEventListener("input", regValidate);
        regCreatePw.addEventListener("input", regValidate);
        regConfirmPw.addEventListener("input", regValidate);
        regTerms.addEventListener("change", regValidate);      
}

RegisterVerification();



