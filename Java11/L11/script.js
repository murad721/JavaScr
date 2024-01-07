const main_container = document.querySelector(".main-container");
const show_btn = document.getElementById("show_btn");
const min_input = document.getElementById("min_input");
const max_input = document.getElementById("max_input");

let cars = [
     {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        price: 24999,
        img_url: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__480.jpg"
     },
     {
        make: "Honda",
        model: "Accord",
        year: 2021,
        price: 26999,
        img_url: "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-438467__480.jpg"
     },
     {
        make: "Chevrolet",
        model: "Camaro",
        year: 2021,
        price: 32999,
        img_url: "https://cdn.pixabay.com/photo/2019/10/02/14/01/chevrolet-camaro-4516372__480.jpg"
     },
     {
        make: "Ford",
        model: "Mustang",
        year: 2022,
        price: 37999,
        img_url: "https://cdn.pixabay.com/photo/2020/06/11/20/05/ford-mustang-5293778__480.jpg"
     },
     {
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        price: 45999,
        img_url: "https://cdn.pixabay.com/photo/2020/06/20/03/52/tesla-model-3-5327315__480.jpg"
     },
     {
        make: "BMW",
        model: "M3",
        year: 2021,
        price: 58999,
        img_url: "https://cdn.pixabay.com/photo/2017/02/27/07/24/bmw-m3-2106453__480.jpg"
     },
     {
        make: "Mercedes-Benz",
        model: "S-Class",
        year: 2022,
        price: 89999,
        img_url: "https://cdn.pixabay.com/photo/2016/03/27/17/58/car-1284417__480.jpg"
     },
     {
        make: "Lamborghini",
        model: "Aventador",
        year: 2022,
        price: 419999,
        img_url: "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__480.png"
     },
     {
        make: "Ferrari",
        model: "458 Italia",
        year: 2015,
        price: 319999,
        img_url: "https://cdn.pixabay.com/photo/2015/07/14/18/17/ferrari-849221__480.jpg"
     },
     {
        make: "Porsche",
        model: "911",
        year: 2021,
        price: 124999,
        img_url: "https://cdn.pixabay.com/photo/2016/03/27/22/18/automobile-1284609__480.jpg"
     },
     {
        make: "Audi",
        model: "R8",
        year: 2022,
        price: 169999,
        img_url: "https://cdn.pixabay.com/photo/2017/11/04/13/56/audi-r8-2915255__480.jpg"
     }
]

show_btn.addEventListener("click", () => {
    main_container.innerHTML = "";
    for ( let i = 0; i < cars.length; i++) {
     if(cars[i].price >= min_input.value && cars[i].price <= max_input.value){
        let inner_container = document.createElement("div");
        inner_container.className = "inner-container";

        let h2 = document.createElement("h2");
        h2.innerText = "Make: " + cars[i].make;

        let h3 = document.createElement("h3");
        h3.innerText = "Model: " + cars[i].model;

        let p1 = document.createElement("p");
        p1.innerText = "Year: " + cars[i].year;

        let p2 = document.createElement("p");
        p2.innerText = "Price: " + cars[i].price;

        let img = document.createElement("img");
        img.src = cars[i].img_url;

        main_container.appendChild(inner_container);
        inner_container.appendChild(h2);
        inner_container.appendChild(h3);
        inner_container.appendChild(p1);
        inner_container.appendChild(p2);
        inner_container.appendChild(img);
     }
    }
});