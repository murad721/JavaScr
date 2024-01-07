 import React, { useState } from 'react'
 import { FaBasketShopping } from "react-icons/fa6";
 import Order from './Order';
 
const showOrders = (props) => {
  return (
    <div>
        {props.orders.map(obj => (
            <Order delete={props.delete} key={obj.id} item={obj} />
        ))}
    </div>
  )
}

const showNone = (props) => {
  return(
    <div className='basket-none'>
      <h2>Корзина пуста</h2>
    </div>
  )
}

export default function Header(props) {
  let [basketOpen, setBasketOpen] = useState(false)
  let [aboutOpen, setAboutOpen] = useState(false)
   return (
     <header>
        <div>
            <div className='logo-block'></div>
            <button onClick={() => setAboutOpen(aboutOpen = !aboutOpen)}className={`about-btn ${aboutOpen && ''}`}>О нас</button>
            {aboutOpen && (
                <div className='about-window'>
                  <h2>Интернет магазин по продаже электроники</h2>
                  <p>Телефон для связи: 8(988)555-55-55</p>
                  <p>Телефон менеджера: 8(888)233-23-23</p>
                  <hr></hr>
                  <h3>Адрес: г.Махачкала</h3>
                </div>
            )}
            <FaBasketShopping onClick={() => setBasketOpen(basketOpen = !basketOpen)} className={`shop-basket ${basketOpen && 'active'}`}/>
            {basketOpen && (
                <div className='shop-basket-window'>
                  {props.orders.length > 0 ?
                      showOrders(props) : showNone()}
                </div>
            )}
        </div>
        <div className='presentation'></div>
        <div className='center-block'>
          <h1>Перечень товаров</h1>
        </div>
        <div className='left-present'></div>
        <div className='right-present'></div>
     </header>
   )
}
 