let Fullname_p = document.getElementById("Fullname_p"); //Связь строки из HTML
let Salary_p = document.getElementById("Salary_p");
let Credit_p = document.getElementById("Credit_p"); //Связь строки из HTML
let Month_p = document.getElementById("Month_p"); //Связь строки из HTML
let Total_p = document.getElementById("Total_p"); //Связь строки из HTML
let Monthly_p = document.getElementById("Monthly_p"); //Связь строки из HTML

let Fullname = prompt("Enter your Fullname..."); //Вводимая переменная в морду
let Salary = prompt("Enter your salary..."); //Вводимая переменная в морду
let Credit = prompt("Enter sum..."); //Вводимая переменная в морду
let Month = prompt("Enter Date..."); //Вводимая переменная в морду

let a = Credit * 0.33; //Расчет процента от введенной суммы
let b = +Credit + a; //Введенная сумма + сумма процента
let c = Math.round(b / Month); //Сумма платежжа в месяц
let d = Salary*0.6;
if ( d < c) {
    alert("We don't give you credit");   
} else {
    Fullname_p.innerText = "Fullname: " + Fullname; //Вывод имени в морду
    Salary_p.innerText = "Salary: " + Salary + " RUB"; //Вывод зарплаты в морду
    Credit_p.innerText = "Credit: " + Credit + " RUB"; //Вывод Суммы кредита в морду
    Month_p.innerText = "Month: " + Month; //Вывод периода 
    Total_p.innerText = "Total: " + b + " RUB"; // Вывод общей сумма из расчетов в морду
    Monthly_p.innerText = "Monthly pay: " + c + " RUB"; // Вывод платежа в месяц из расчетов в морду
}