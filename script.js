password = document.querySelector(".password");
repeatPassword = document.querySelector(".repeat-password");
button = document.querySelector("button");
dontMatch = document.querySelector(".dmatch")

button.addEventListener("click",() => {
    if(repeatPassword !== password){
        dontMatch.textContent = "* Passwords do not match"
        repeatPassword.style.borderColor = "red"
        password.style.borderColor = "red"
        }
    }
)
