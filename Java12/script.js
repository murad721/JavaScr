const model_input = document.getElementById("model_input");
const engine_input = document.getElementById("engine_input");
const hp_input = document.getElementById("hp_input");
const price_input = document.getElementById("price_input");
const add_btn = document.getElementById("add_btn");
const model_p = document.getElementById("model_p");
const engine_p = document.getElementById("engine_p");
const hp_p = document.getElementById("hp_p");
const price_p = document.getElementById("price_p");
const info_container = document.getElementById("info_container");
const main_container = document.querySelector(".main-container");
const clear_btn = document.getElementById("clear_btn");
const car_form = document.getElementById("car_form");

let model, engine, hp, price;

function submitForm(){
    event.preventDefault(); //prevents website to refresh
    model = model_input.value;
    engine = engine_input.value;
    hp = hp_input.value;
    price = price_input.value;

    model_p.innerText = "Car model: " + model;
    engine_p.innerText = "Car engine: " + engine + "L";
    hp_p.innerText = "Car horsepower: " + hp;
    price_p.innerText = "Car price: " + price + "$";

    info_container.style.display = "block";
    car_form.style.display = "none"; 
}

// add_btn.addEventListener("click",()=> {
//     event.preventDefault(); //prevents website to refresh
//     model = model_input.value;
//     engine = engine_input.value;
//     hp = hp_input.value;
//     price = price_input.value;

//     model_p.innerText = "Car model: " + model;
//     engine_p.innerText = "Car engine: " + engine + "L";
//     hp_p.innerText = "Car horsepower: " + hp;
//     price_p.innerText = "Car price: " + price + "$";

//     info_container.style.display = "block";
//     car_form.style.display = "none"; 
// });

clear_btn.addEventListener("click",()=> {
    model_input.value = "";
    engine_input.value = "";
    hp_input.value = "";
    price_input.value = "";


    info_container.style.display = "none";
    car_form.style.display = "block";
});