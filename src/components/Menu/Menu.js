import React from 'react';
import './Menu.css'

function Menu(props) {

    return (
        <div className="catalog">
            <ul className="catalog-list">
                {props.pizzas.map((pizza, index) => {
                   return <li key={pizza.id}><Pizza
                    key={pizza.id}
                    name={pizza.name}
                    descr={pizza.descr}
                    price={pizza.price}
                    quantity={pizza.quantity}
                    clicked={() => props.clicked(pizza)}
                    inc={() => props.inc(pizza, index)}
                    dec={() => props.dec(pizza, index)}
                    />
                    </li> 
                })}             
            </ul>
        </div>
    )
}

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

export default Menu;
