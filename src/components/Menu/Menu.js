import React from 'react';
import './Menu.css'

function Menu(props) {
    return (
        <div className="catalog">
            <ul className="catalog-list">
                {props.pizzas.map((pizza) => {
                   return <li key={pizza.id}><Pizza
                    key={pizza.id}
                    name={pizza.name}
                    descr={pizza.descr}
                    price={pizza.price}
                    clicked={() => props.clicked(pizza)}
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
            <button className="buy-button" onClick={props.clicked}>Add to Cart</button>
        </div>
    )
}

export default Menu;
