import React from 'react';
import './Menu.css'

function Menu(props) {
    return (
        <div className="catalog">
            <ul className="catalog_list">
                <li><Pizza name={props.pizzas[0].name} descr={props.pizzas[0].descr} price={props.pizzas[0].price}/></li>
                <li><Pizza name={props.pizzas[1].name} descr={props.pizzas[1].descr} price={props.pizzas[1].price}/></li>
                <li><Pizza name={props.pizzas[2].name} descr={props.pizzas[2].descr} price={props.pizzas[2].price}/></li>
                <li><Pizza name={props.pizzas[3].name} descr={props.pizzas[3].descr} price={props.pizzas[3].price}/></li>
                <li><Pizza name={props.pizzas[4].name} descr={props.pizzas[4].descr} price={props.pizzas[4].price}/></li>
                <li><Pizza name={props.pizzas[5].name} descr={props.pizzas[5].descr} price={props.pizzas[5].price}/></li>
                <li><Pizza name={props.pizzas[6].name} descr={props.pizzas[6].descr} price={props.pizzas[6].price}/></li>
                <li><Pizza name={props.pizzas[7].name} descr={props.pizzas[7].descr} price={props.pizzas[7].price}/></li>
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
            <button className="buy_button">Add to Cart</button>
        </div>
    )
}

export default Menu;
