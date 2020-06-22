import React from 'react'

export default function Item(props) {
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