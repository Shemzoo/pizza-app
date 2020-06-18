import React from 'react'
import './Cart.css'

function Cart(props) {
    let currencyRate = 0.89;
    let deliveryCost = 16;
    let check = 'Cart is Empty. Add something from the Menu!';

    if (props.total) {
        check = (
            <div>
                <p>Price, US: {props.total} $ + {deliveryCost} $ (delivery), total: {props.total+deliveryCost} $ </p>
                <p>Price, EUR: {props.total * currencyRate} € + {deliveryCost * currencyRate} € (delivery), total: {(props.total+deliveryCost)*currencyRate} € </p>
                <div className="customer-inputs">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="text" placeholder="Enter Your Surname"/>
                    <input type="tel" placeholder="Enter Your Phone Number"/>
                </div>               
                <button className="order-button" onClick={props.clicked}>Place Order</button>
            </div>
        )
    }

    return (
        <div>
            <ul className="cart-list">
                {props.cart.map(item => {
                    return (
                        <li className="cart-list__item" key={item.id}>
                            <Item
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            inc={() => props.inc(item)}
                            dec={() => props.dec(item)}
                            />
                            
                        </li>
                    )
                })}
            </ul>
            {check}
        </div>
    )
}

function Item(props) {
    return (
        <div>
            <p>{props.quantity} delicious "{props.name}" at the price of {props.price * props.quantity} $</p>
            <div className="count-buttons--cart">
                <button className="count-buttons__increase--cart" onClick={props.inc}>+</button>
                <button className="count-buttons__decrease--cart" onClick={props.dec}>-</button>
            </div>
            <hr className="check-line"/>
        </div>
    )
}

export default Cart
