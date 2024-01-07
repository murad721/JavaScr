const Fullname_p = document.getElementById("Fullname_p");
const Salary_p = document.getElementById("Salary_p");
const Credit_p = document.getElementById("Credit_p");
const Month_p = document.getElementById("Month_p");
const Total_p = document.getElementById("Total_p");
const Monthly_p = document.getElementById("Monthly_p");
const Exchange_p = document.getElementById("Exchange_p");
const credit_btn = document.querySelector("#credit_btn");
const exchange_btn = document.querySelector("#exchange_btn");

credit_btn.addEventListener("click",function() {
    let Fullname = prompt("Enter your Fullname...");
    let Salary = prompt("Enter your salary...");
    let Credit = prompt("Enter sum...");
    let Month = prompt("Enter Date...");

    let a = Credit * 0.33;
    let b = +Credit + a;
    let c = Math.round(b / Month);
    let d = Salary*0.6; 
    
    if ( d < c) {
        alert("We don't give you credit");   
    } else {
        Fullname_p.innerText = "Fullname: " + Fullname;
        Salary_p.innerText = "Salary: " + Salary + " RUB";
        Credit_p.innerText = "Credit: " + Credit + " RUB";
        Month_p.innerText = "Month: " + Month;
        Total_p.innerText = "Total: " + b + " RUB";
        Monthly_p.innerText = "Monthly pay: " + c + " RUB";
        }
    });

exchange_btn.addEventListener("click",function(){
    let Exchange = prompt("Enter your sum in AZN...");
    Exchange_p.innerText = "Total sum in RUB: " + Exchange * 48.21;
    gul_h.innerText = "Gulnazim";
    
    main_container.style.backgroundColor = "darkred";
    main_container.style.width = "60%";
    main_container.style.padding = "120px";
    main_container.style.borderRadius = "30px";
});
