const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm");
const form=document.getElementById("register");
const btn=document.getElementsByClassName("start-btn")

var validconfirm=false;
var validuser=false;
var validemail=false;
var validpassword=false;

function showErrorMessage(input, message){
    let container=input.parentElement;
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div')
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
}

function checkUsername(){
    let usernameArr = username.value.split("");
    const usernamePtn = /[a-zA-Z0-9]/g;
    const matchPtn = username.value.match(usernamePtn);
    if (
        username.value.length < 5 ||
        username.value.length > 15 ||
        !isNaN(parseInt(usernameArr[0])) ||
        !isNaN(parseInt(usernameArr[usernameArr.length - 1])) ||
        usernameArr.includes("_") ||
        usernameArr.includes(" ") ||
        matchPtn.length !== username.value.length
    ) {
        let message="It must have between 5 and 15 characters, only numbers or letters,and no numbers at the beginning or end!";
        showErrorMessage(username,message);
        validuser = false;
    } else {
        showErrorMessage(username, null);
        validuser = true;
    }
}

function checkEmail(){
    const emailPtn = /\w+@\w+.\w+/gi;
    if(!emailPtn.test(email.value)){
        let message="Please enter a valid email address";
        showErrorMessage(email,message);
        validemail=false;
    }else{
        showErrorMessage(email,null);
        validemail=true;
    }
}

function checkPassword() {
    const passwordPtn1 = /[A-Z]/g;
    const passwordPtn2 = /[a-z]/g;
    const passwordPt3 = /[0-9]/g;
    const passwordPtn4 = /\W/g;
    if (
      password.value.length < 8 ||
      !passwordPtn1.test(password.value) ||
      !passwordPtn2.test(password.value) ||
      !passwordPt3.test(password.value) ||
      !passwordPtn4.test(password.value)
    ) {
        let message="Password must be at least 8 characters, and at least one uppercase,lowercase, number and sympol...";
        showErrorMessage(password,message);
        validpassword=false;
    } else {
        showErrorMessage(password,null);
        validpassword=true;
    }
}

function checkConfirm() {
    if(password.value!==confirmPassword.value){
        let message="Mismatched Password..";
        showErrorMessage(confirmPassword,message);
        validconfirm=false;
    }else{
        showErrorMessage(confirmPassword,null);
        validconfirm=true;
    }
}

function onvalidate(){
     return validconfirm&&validuser&&validemail&&validpassword;
}

// btn.addEventListener('click',(e)=>{
//     e.preventDefault;
//     if(onvalidate()){
//         alert('Success!');
//     }else{
//         alert('Error');
//     }
// })

function checkvalidate(e){
    if(onvalidate()){
        console.log("success");
        alert('Success')
        localStorage.setItem("email", email.value);
        location.href = "success.html";
    }else{
        alert('Error please fill the form with valid data.');
    }
}