const username_register_input = document.getElementById("username_register_input");
const email_register_input = document.getElementById("email_register_input");
const password_register_input = document.getElementById("password_register_input");
const confirm_input = document.getElementById("confirm_input");
const username_login_input = document.getElementById("username_login_input");
const password_login_input = document.getElementById("password_login_input");
const register_btn = document.getElementById("register_btn");
const login_btn = document.getElementById("login_btn");
const info_p = document.getElementById("info_p");
const login_info_p = document.getElementById("login_info_p");
const register_close_btn = document.getElementById("register_close_btn");
const login_close_btn = document.getElementById("login_close_btn");
const account_container = document.getElementById("account_container");

let username_register, password_register, email_register;


register_btn.addEventListener("click", ()=> {
    
    if (username_register_input.value.length >= 6) {
        if (email_register_input.value.length >= 8 && email_register_input.value.includes("@")) {
            if (password_register_input.value.length >= 6) {
                if (password_register_input.value == confirm_input.value) {

                    username_register = username_register_input.value;
                    password_register = password_register_input.value;
                    email_register = email_register_input.value;

                    info_p.style.color = "green";
                    info_p.innerText = "Notifitication: Saccessfull registered";

                    username_register_input.value = "";
                    password_register_input.value = "";
                    email_register_input.value = "";
                    confirm_input.value = "";

                } else {
                    info_p.innerText = "Notifitication: Password mismatch"
                }
            } else {
                info_p.innerText = "Notifitication: Password should be more than 6 characters"
            }
        } else {
            info_p.innerText = "Notifitication: Email must be more than 6 characters and includes '@' symbol";
        }
    } else {
        info_p.innerText = "Notifitication: Username must be more than 6 characters";
    }
});
    

login_btn.addEventListener("click", ()=> {
    
    if(username_login_input.value.length >= 6) {
        if(password_login_input.value.length >= 6) {
            if(username_login_input.value == username_register) {
                if(password_login_input.value == password_register) {
                    document.location = "index2.html";
                } else {
                    login_info_p.innerText = "Notifiticaton: Password for this account is not correct";
                }
            } else {
                login_info_p.innerText = "Notifitication: Can't find this user";
            }
        } else {
            login_info_p.innerText = "Notifitication: Password must be more than 6 character";
        }
    } else {
        login_info_p.innerText = "Notifitication: Username must be more than 6 character";
    }
});

register_close_btn.addEventListener("click", ()=> {
    username_register_input.value = "";
    password_register_input.value = "";
    email_register_input.value = "";
    confirm_input.value = "";
    info_p.innerText = "";
});

login_close_btn.addEventListener("click", ()=> {
    username_login_input.value = "";
    password_login_input.value = "";
    login_info_p.innerText = "";
});