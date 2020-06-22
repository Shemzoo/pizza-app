import React from 'react'

export default function Pizza(props) {
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
            <button className="buy-button" onClick={props.add}>Add to Cart</button>
        </div>
    )
}
