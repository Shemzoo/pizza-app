import React, { Component } from 'react';
import Pizza from './Pizza/Pizza'
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
                        add={() => this.props.add(pizza)}
                        inc={() => this.incButtonHandler(pizza, index)}
                        dec={() => this.decButtonHandler(pizza, index)}
                        />
                        </li> 
                    })}             
                </ul>
            </div>
        )
    }   
}

export default Menu;
