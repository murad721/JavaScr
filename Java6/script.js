const main_container = document.querySelector(".main-container");
const sign_btn = document.getElementById("sign_btn");
const login_btn = document.getElementById("login_btn");
const left_info = document.getElementById("left_info");
const username_input = document.getElementById("username_input");
const mail_input = document.getElementById("mail_input");
const password_input = document.getElementById("password_input");
const confirm_input = document.getElementById("confirm_input");
const registr_btn = document.getElementById("registr_btn");
const login_input = document.getElementById("login_input");
const pass_input = document.getElementById("pass_input");
const log_btn = document.getElementById("log_btn");
const second_user = document.getElementById("second_user");
const second_mail = document.getElementById("second_mail");
const second_block = document.getElementById("second_block");
const log_out_btn = document.getElementById("log_out_btn");

let username, email, password, confpass, login, pass;

sign_btn.addEventListener("click",()=> {
    left_info.style.display = "block";
});

registr_btn.addEventListener("click",()=> {
    username = username_input.value;
    email = mail_input.value;
    password = password_input.value;
    confpass = confirm_input.value;
    if (username === "Murad" && email === "sharifow721@yandex.ru" && password === "12345" && confpass === password){
        left_info.style.display = "none";
    }else {
        alert("Date is nor cirrect!");
    }
    
});

login_btn.addEventListener("click", ()=> {
    right_info.style.display = "block";
})

log_btn.addEventListener("click",()=> {
    login = login_input.value;
    pass = pass_input.value;
    email = mail_input.value;
    username = username_input.value;
    password = password_input.value;
    if (login === username && pass === password){
        second_user.innerText = "Username: " + login;
        second_mail.innerText = "Email: " + email;
        
        right_info.style.display = "none";
        main_container.style.display = "none";
        second_block.style.display = "block";
    }else{
        alert("Error");
    }
   
});

log_out_btn.addEventListener("click", ()=> {
    second_block.style.display = "none";
    main_container.style.display = "block";
});