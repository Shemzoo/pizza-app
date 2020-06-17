import React from 'react'
import './Cart.css'

function Cart(props) {
    let currencyRate = 0.89;
    let receipt = 'Cart is Empty. Add something from the Menu!';

    if (props.total) {
        receipt = (
            <div>
                <p>Price Total, US: {props.total} $ </p>
                <p>Price Total, EUR: {props.total * currencyRate} € </p>
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
                            />
                        </li>
                    )
                })}
            </ul>
            {receipt}
        </div>
    )
}

function Item(props) {
    return (
        <div>
            <p>Delicious "{props.name}" at the price of {props.price} $</p>
            <hr/>
        </div>
    )
}

export default Cart
