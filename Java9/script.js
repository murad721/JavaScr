// const people = [{
//       "fullname": "John Doe",
//       "age": 18,
//       "average_score": 85,
//       "grade": "A"
//     },
//     {
//       "fullname": "Jane Smith",
//       "age": 17,
//       "average_score": 92,
//       "grade": "A+"
//     },
//     {
//       "fullname": "Mike Johnson",
//       "age": 19,
//       "average_score": 78,
//       "grade": "B+"
//     },
//     {
//       "fullname": "Emily Davis",
//       "age": 18,
//       "average_score": 88,
//       "grade": "A-"
//     },
//     {
//       "fullname": "David Lee",
//       "age": 17,
//       "average_score": 76,
//       "grade": "C+"
//     },
//     {
//       "fullname": "Sarah Brown",
//       "age": 18,
//       "average_score": 90,
//       "grade": "A"
//     },
//     {
//       "fullname": "Michael Wilson",
//       "age": 19,
//       "average_score": 82,
//       "grade": "B"
//     },
//     {
//       "fullname": "Jennifer Taylor",
//       "age": 17,
//       "average_score": 95,
//       "grade": "A+"
//     },
//     {
//       "fullname": "Andrew Anderson",
//       "age": 18,
//       "average_score": 81,
//       "grade": "B"
//     },
//     {
//       "fullname": "Jessica Martinez",
//       "age": 19,
//       "average_score": 79,
//       "grade": "C+"
//     },
//     {
//       "fullname": "Ryan Clark",
//       "age": 18,
//       "average_score": 87,
//       "grade": "B+"
//     },
//     {
//       "fullname": "Olivia Rodriguez",
//       "age": 17,
//       "average_score": 93,
//       "grade": "A+"
//     },
//     {
//       "fullname": "Daniel Hall",
//       "age": 19,
//       "average_score": 84,
//       "grade": "B"
//     },
//     {
//       "fullname": "Sophia Young",
//       "age": 18,
//       "average_score": 89,
//       "grade": "B+"
//     },
//     {
//       "fullname": "Matthew Lewis",
//       "age": 17,
//       "average_score": 77,
//       "grade": "C"
//     },
//     {
//       "fullname": "Ava Hernandez",
//       "age": 18,
//       "average_score": 91,
//       "grade": "A"
//     },
//     {
//       "fullname": "William Turner",
//       "age": 19,
//       "average_score": 83,
//       "grade": "B"
//     },
//     {
//       "fullname": "Grace Walker",
//       "age": 17,
//       "average_score": 94,
//       "grade": "A+"
//     },
//     {
//       "fullname": "Liam Moore",
//       "age": 18,
//       "average_score": 80,
//       "grade": "B-"
//     },
//     {
//         "fullname": "Grace Walker",
//         "age": 17,
//         "average_score": 94,
//         "grade": "A+"
//     },
//     {
//       "fullname": "Chloe Adams",
//       "age": 19,
//       "average_score": 85,
//       "grade": "B"
//     }
// ]

// localStorage.setItem("people", JSON.stringify(people));
const add_btn = document.getElementById("add_btn");
const add_btn_2 = document.getElementById("add_btn_2");
const clear_btn = document.getElementById("clear_btn");
const main_container = document.querySelector(".main-container");
const username_input_person = document.getElementById("username_input_person");
const age_input_person = document.getElementById("age_input_person");
const score_input_person = document.getElementById("score_input_person");
const grade_input_person = document.getElementById("grade_input_person");
const add_person_btn = document.getElementById("add_person_btn");

let people = [];
getItemsFromServer();
// add_btn.addEventListener("click",()=> {
//     showPeople("people");
// });

function getItemsFromServer() {
    main_container.innerHTML= "";
    const request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json");
    request.onload = () => {
    people = JSON.parse(request.responseText);
    for (let i = 0; i < people.length; i++) {
        const div = document.createElement("div");
        div.className = "inner-container";

        const h2 = document.createElement("h2");
        h2.innerText = people[i].productId;

        const p1 = document.createElement("p");
        p1.innerText = "Age: " + people[i].productName;

        const p2 = document.createElement("p");
        p2.innerText = "Score: " + people[i].productImage;

        const p3 = document.createElement("p");
        p3.innerText = "Grade: " + people[i].productStock;

        const p4 = document.createElement("p");
        p4.innerText = "Grade: " + people[i].productPrice;

        const p5 = document.createElement("p");
        p5.innerText = "Grade: " + people[i].productSalePrice;

        const p6 = document.createElement("p");
        p6.innerText = "Grade: " + people[i].rating;

        // const button = document.createElement("button");
        // button.innerText = "DELETE";
        // button.className = "btn btn-light btn-lg mb-2";
        // button.addEventListener("click",()=> {
        //     people.splice(i, 1);
        //     localStorage.setItem(team, JSON.stringify(people));
        //     showPeople(team);
        // });

        // clear_btn.addEventListener("click", ()=> {
        //     people.splice(i);
        //     localStorage.setItem(team, JSON.stringify(people));
        //     showPeople(team);
        // });

        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(p5);
        div.appendChild(p6);
        // div.appendChild(button);
        main_container.appendChild(div);
    }
    }
    request.send();
}

// add_person_btn.addEventListener("click", ()=> {
//     people = JSON.parse(localStorage.getItem("person"));
//     const person = {
//         fullname : username_input_person.value,
//         age : age_input_person.value,
//         average_score : score_input_person.value,
//         grade : grade_input_person.value
//     }
//     people.push(person);
//     localStorage.setItem("person", JSON.stringify(people));
//     showPeople("person");
// });
