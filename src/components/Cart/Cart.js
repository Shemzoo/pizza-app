import React, { Component } from 'react';
import './Cart.css'

const CURRENCY_RATE = 0.89;
const DELIVERY_COST = 16;

class Cart extends Component {
    incButtonHandler = (item, index) => {
        this.props.itemInc( {...item, quantity: item.quantity + 1}, index);
    };

    decButtonHandler = (item, index) => {
        if (this.props.cart[index].quantity > 0) {
            this.props.itemDec( {...item, quantity: item.quantity - 1}, index);
        }
    };

    removeButtonHandler = (item, index) => {
        this.props.itemDel(item, index)
    };

    render() {
        let check = 'Cart is Empty. Add something from the Menu!';

        if (this.props.total) {
                check = (
                    <div>
                        <p>Price, US: {this.props.total} $ + {DELIVERY_COST} $ (delivery), total: {this.props.total+DELIVERY_COST} $ </p>
                        <p>Price, EUR: {this.props.total * CURRENCY_RATE} € + {DELIVERY_COST * CURRENCY_RATE} € (delivery), total: {(this.props.total+DELIVERY_COST)*CURRENCY_RATE} € </p>
                        <div className="customer-inputs">
                            <input type="text" placeholder="Enter Your Name"/>
                            <input type="text" placeholder="Enter Your Surname"/>
                            <input type="tel" placeholder="Enter Your Phone Number"/>
                        </div>               
                        <button className="order-button" onClick={this.props.clicked}>Place Order</button>
                    </div>
                )
        }

        return (
            <div>
                <ul className="cart-list">
                    {this.props.cart.map((item, index) => {
                        return (
                            <li className="cart-list__item" key={index}>
                                <Item
                                key={index}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                inc={() => this.incButtonHandler(item, index)}
                                dec={() => this.decButtonHandler(item, index)}
                                remove={() => this.removeButtonHandler(item, index)}
                                />   
                            </li>
                        )
                    })}
                </ul>
                {check}
            </div>
        )

        function Item(props) {
            return (
                <div>
                    <p>{props.quantity} delicious "{props.name}" at the price of {props.price * props.quantity} $</p>
                    <div className="count-buttons--cart">
                        <button className="count-buttons__increase--cart" onClick={props.inc}>+</button>
                        <button className="count-buttons__decrease--cart" onClick={props.dec}>-</button>
                    </div>
                    <button className="remove-button" onClick={props.remove}>Remove</button>
                    <hr className="check-line"/>
                </div>
            )
        }
    }
}

export default Cart
