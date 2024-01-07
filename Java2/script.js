const object = {
    name: 'Murad',
    age: 18,
    height: 190,
    weight: 60
}

for (let key in object) {
    console.log(`Свойство ${key} имеет значение ${object[key]}`);
}
 
console.log(Object.keys(object).length);

const {name, age} = object;

console.log(name,age);