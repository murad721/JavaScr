import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Selection from "./components/Selection";

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      needProducts: [],
      items:[
        {
          "id": 1,
          "category": "tablets",
          "brand": "Apple",
          "model": "iPad Pro 2022 128GB",
          "price": "Цена: 79990",
          "img_url": "https://img.05.ru/resize/j4rbRcXQ3qkgspzA5p4Tm5VcTAuDEs7B-r7Sra1qP7I//rs:fit:800:800:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5ODI5NS81LmpwZw",
        },
        {
          "id": 2,
          "category": "tablets",
          "brand": "Apple",
          "model": "iPad Air 2022 64GB",
          "price": "Цена: 57990",
          "img_url": "https://img.05.ru/resize/4SPckpLkYX-Wc879JUsOypTW6z726bPbKFfLOPDvdZ8//rs:fit:2749:3113:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NTYxMy8xLnBuZw"
        },
        {
          "id": 3,
          "category": "tablets",
          "brand": "Xiaomi",
          "model": "Redmi Pad 128GB",
          "price": "Цена: 18990",
          "img_url": "https://img.05.ru/resize/x2Q3OBJujAHuHsHKLP-IGAnbN6r-_qRoAXLACVsiwmk//rs:fit:595:722:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIwMjA3Mi8xMC5qcGc"
        },
        {
          "id": 4,
          "category": "tablets",
          "brand": "Samsung",
          "model": "Galaxy S6 Lite 64GB",
          "price": "Цена: 30990",
          "img_url": "https://img.05.ru/resize/Nvw8ZhDejdOh-rGc_T42Lh9CTDmBadpzfEIgQASVzAI//rs:fit:1172:1063:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NTQ3OC8xMC5qcGc"
        },
        {
          "id": 5,
          "category": "tablets",
          "brand": "Xiaomi",
          "model": "Xiaomi Pad 5 128GB",
          "price": "Цена: 30590",
          "img_url": "https://img.05.ru/resize/9Bah0iBxqVQe6tDMLSwWe9jKVh3cM0I66G4RrUcpduA//rs:fit:1113:1319:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NTUzNC83LmpwZw"
        },
        {
          "id": 6,
          "category": "tablets",
          "brand": "Huawei",
          "model": "MatePad T8 32GB",
          "price": "Цена: 8990",
          "img_url": "https://img.05.ru/resize/jILTw2f2BWFXq2voG5_0AodJOu2O67hXdemkbQ7MQvM//rs:fit:1307:1520:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NTUzMS84LmpwZw"
        },
        {
          "id": 7,
          "category": "phones",
          "brand": "Apple",
          "model": "iPhone 11 64GB",
          "price": "Цена: 44990",
          "img_url": "https://img.05.ru/resize/Uz8hPgP7jTZFMmZILVvYPPLPvw2rIXn-CUcuhqIhBqM//rs:fit:1406:1920:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5MjQxMC8yNy5qcGc"
        },
        {
          "id": 8,
          "category": "phones",
          "brand": "Apple",
          "model": "iPhone 13 128GB",
          "price": "Цена: 65990",
          "img_url": "https://img.05.ru/resize/w67YbdU4-wIqzDq_7q4U-BGtQ0Yn9-4WFHVexSQt1DI//rs:fit:1917:2553:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE4OTcxNC8xMi5qcGc"
        },
        {
          "id": 9,
          "category": "phones",
          "brand": "Apple",
          "model": "iPhone 14 128GB",
          "price": "Цена: 72990",
          "img_url": "https://img.05.ru/resize/3uiOFdfYU6tUVQLCD_j2KpedzRNYeDQKa_hA0S0kYVE//rs:fit:1241:1652:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIwNTI5OC8xNS5qcGc"
        },
        {
          "id": 10,
          "category": "phones",
          "brand": "Apple",
          "model": "iPhone 14 Plus 128GB",
          "price": "Цена: 82990",
          "img_url":"https://img.05.ru/resize/_gBqZpf5oKXHpyT2xOl3we-HMHi9Hh7qh7_ioG5FYFA//rs:fit:652:881:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIxMDUyNS8yMi5qcGc"
        },
        {
          "id": 11,
          "category": "phones",
          "brand": "Apple",
          "model": "iPhone 14 Pro 128GB",
          "price": "Цена: 96990",
          "img_url": "https://img.05.ru/resize/EkbrwG8LDGP_nTQRw_8O0JLacJ5n3eaK7_aTdEPjeNk//rs:fit:1028:1344:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NDczOS8zLmpwZw"
        },
        {
          "id": 12,
          "category": "phones",
          "brand": "Apple",
          "model": "iPhone 14 Pro Max 256GB",
          "price": "Цена: 115990",
          "img_url": "https://img.05.ru/resize/GULMdkHqHEDWgZpSTbHegKXdhOmL11mKhBgn3YTVLp0//rs:fit:1028:1344:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NDc1Ni8zLmpwZw"
        },
        {
          "id": 13,
          "category": "laptop",
          "brand": "Apple",
          "model": "MacBook Air 13 M1 2020",
          "price": "Цена: 84990",
          "img_url": "https://img.05.ru/resize/mKMNODGMqNtQIDEMJq6utWd9pilWQpexrHpgiYzgSlU//rs:fit:2159:1276:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5MDMzNC8xLmpwZw"
        },
        {
          "id": 14,
          "category": "laptop",
          "brand": "Apple",
          "model": "MacBook Pro M1 2021",
          "price": "Цена: 186990",
          "img_url": "https://img.05.ru/resize/j1g8TamKyFaItsN3vK7Qb8Gr7V6y4n2SnIrUaIoxFk4//rs:fit:3332:2052:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5MzExNy8xLmpwZw"
        },
        {
          "id": 15,
          "category": "laptop",
          "brand": "Asus",
          "model": "Vivobook M1603QA",
          "price": "Цена: 56000",
          "img_url": "https://img.05.ru/resize/peU36wgkwUe9c8i8xmn3-wm6oRzA-HgpDE0ADURiOtI//rs:fit:900:486:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIxMDAxMS8zLmpwZw"
        },
        {
          "id": 16,
          "category": "laptop",
          "brand": "Asus",
          "model": "TUF Dash F15",
          "price": "Цена: 87990",
          "img_url": "https://img.05.ru/resize/O_gTcgTEhRRaFv-zhWciKlRw_Ta_rWOVvS49BRcPXKk//rs:fit:519:370:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIxMDQ3OC8xLmpwZw"
        },
        {
          "id": 17,
          "category": "laptop",
          "brand": "Gigabyte",
          "model": "G5 MF-E2",
          "price": "Цена: 82990",
          "img_url": "https://img.05.ru/resize/ZjC0Q40a35GO5Eb0vpOmoU_pW7FrtIe-qr3IjiaOI6E//rs:fit:800:525:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIwOTE2My8yLmpwZw"
        },
        {
          "id": 18,
          "category": "laptop",
          "brand": "Lenovo",
          "model": "Legion 5 15ITH6",
          "price": "Цена: 70990",
          "img_url": "https://img.05.ru/resize/gTCZ3VHD_Ko4m_74-veRZYIkf6DZ2mGFrLw1bLwDCsA//rs:fit:1304:1094:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIwNjY3Mi8xLnBuZw"
        },
        {
          "id": 19,
          "category": "watch",
          "brand": "Apple ",
          "model": "Watch Ultra 49mm",
          "price": "Цена: 74990",
          "img_url": "https://img.05.ru/resize/AyiDf0ZeDn8JwFiE9avX_E0EIzr1K7MmTgsfVYqUeBY//rs:fit:628:699:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NjQyMC8xLmpwZw"
        },
        {
          "id": 20,
          "category": "watch",
          "brand": "Apple",
          "model": "Watch Series 8 45mm",
          "price": "Цена: 39990",
          "img_url": "https://img.05.ru/resize/EeE7IXa1dsOfaNHBTZKxwJs_PWpD0nLPbB20_EKXv-g//rs:fit:1084:1252:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NDk2NC8xLmpwZw"
        },
        {
          "id": 21,
          "category": "watch",
          "brand": "Huawei",
          "model": "Watch Buds",
          "price": "Цена: 29990",
          "img_url": "https://img.05.ru/resize/XPSF7UePEjKV61OUHVtckePRMX4tpXPb6RTmgLHKk8E//rs:fit:592:648:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIwOTM0NS82LmpwZw"
        },
        {
          "id": 22,
          "category": "watch",
          "brand": "Samsung",
          "model": "Galaxy Watch 5 Pro 45mm",
          "price": "Цена: 27990",
          "img_url": "https://img.05.ru/resize/6mGx3PycuEQHaOkHkj4I_7GAw04A4y_CCH5kWjHdjIs//rs:fit:1099:1233:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5NTc3My85LmpwZw"
        },
        {
          "id": 23,
          "category": "watch",
          "brand": "Xiaomi",
          "model": "Smart Band 7 Pro",
          "price": "Цена: 5990",
          "img_url": "https://img.05.ru/resize/cfwwshPMT6HGecT31YxTDT4BloS_Ewur5ohQF6alGHI//rs:fit:1074:1227:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5Njk3NC8xLmpwZw"
        },
        {
          "id": 24,
          "category": "watch",
          "brand": "Xiaomi",
          "model": "Watch S1 Pro",
          "price": "Цена: 20390",
          "img_url": "https://img.05.ru/resize/44iDqQrti7CN19LL5-4sSNfjKz5rG5EEPAe-OF0AYaU//rs:fit:1039:1069:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIwNjAzMC80LmpwZw"
        }
      ]
    }
    this.state.needProducts = this.state.items
    this.addToBasket = this.addToBasket.bind(this)
    this.cleanBasket = this.cleanBasket.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} delete={this.cleanBasket} />
        <Selection selectCategory={this.selectCategory}/>
        <Items items={this.state.needProducts} onAdd={this.addToBasket} />
        <Footer />
      </div>
    );
  }

  selectCategory(category) {
    if(category === "all") {
      this.setState({ needProducts: this.state.items })
      return
    }
      this.setState({
      needProducts: this.state.items.filter(obj => obj.category === category)
    })
  }
  
  addToBasket(item) {
    let a = false
    this.state.orders.forEach(obj => {
      if(obj.id === item.id)
        a = true
    })
    if (!a)
    this.setState({ orders: [...this.state.orders, item] })
  }

  cleanBasket(id) {
   this.setState({orders: this.state.orders.filter(obj => obj.id !== id )})
  }
}

export default App;
