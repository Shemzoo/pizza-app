import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
    incButtonHandler = (pizza, index) => {
        this.props.onPizzaChange( {...pizza, quantity: pizza.quantity + 1}, index);
    };

    decButtonHandler = (pizza, index) => {
        if (this.props.pizzas[index].quantity > 0) {
            this.props.onPizzaChange( {...pizza, quantity: pizza.quantity - 1}, index);
        }
    };

    render() {
        return (
            <div className="catalog">
                <ul className="catalog-list">
                    {this.props.pizzas.map((pizza, index) => {
                       return <li key={index}><Pizza
                        key={index}
                        name={pizza.name}
                        descr={pizza.descr}
                        price={pizza.price}
                        quantity={pizza.quantity}
                        clicked={() => this.props.clicked(pizza)}
                        inc={() => this.incButtonHandler(pizza, index)}
                        dec={() => this.decButtonHandler(pizza, index)}
                        />
                        </li> 
                    })}             
                </ul>
            </div>
        )

        function Pizza(props) {
            return (
                <div className="card">
                    <h3>{props.name}</h3>
                    <p>{props.descr}</p>
                    <p>{props.price} $</p>
                    <p>Quantity: {props.quantity}</p>
                    <div className="count-buttons">
                        <button className="count-buttons__increase" onClick={props.inc}>+</button>
                        <button className="count-buttons__decrease" onClick={props.dec}>-</button>
                    </div>
                    <button className="buy-button" onClick={props.clicked}>Add to Cart</button>
                </div>
            )
        }
    }
    
}

export default Menu;
