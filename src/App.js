import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const AVAILABLE_PIZZAS = [
  { id: 1,
    name: 'Margherita',
    price: 15,
    quantity: 0,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { id: 2,
    name: 'Carbonara',
    price: 15,
    quantity: 0,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { id: 3,
    name: 'Crudo',
    price: 15,
    quantity: 0,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { id: 4,
    name: 'Pugliese',
    price: 15,
    quantity: 0,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { id: 5,
    name: 'Romana',
    price: 15,
    quantity: 0,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { id: 6,
    name: 'Schiacciata',
    price: 15,
    quantity: 0,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { id: 7,
    name: 'Americana',
    price: 15,
    quantity: 0,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { id: 8,
    name: 'Gorgonzola',
    price: 15,
    quantity: 0,  
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

class App extends Component {
  state = {
    pizzas: AVAILABLE_PIZZAS,

    cart: [],

    total: ''

  };  

  addButtonHandler = (pizza) => {

    this.setState( { cart: [...this.state.cart, pizza] } ) 

    this.setState( { total: Number(this.state.total + pizza.price * pizza.quantity) } )
    
  };

  handlePizzaChange = (pizza, index) => {
    let pizzas = [...this.state.pizzas];
    pizzas[index] = pizza;
    this.setState( { pizzas: pizzas } );
  }

  handleIncItemChange = (item, index) => {
    let cart = [...this.state.cart];
    cart[index] = item;
    this.setState( { cart: cart } );
    this.setState( { total: Number(this.state.total + item.price) } )
  }

  handleDecItemChange = (item, index) => {
    let cart = [...this.state.cart];
    cart[index] = item;
    this.setState( { cart: cart } );
    this.setState( { total: Number(this.state.total - item.price) } )
  }

  handleItemRemove = (item, index) => {
    let cart = [...this.state.cart]
    cart.splice(index, 1)
    this.setState( { cart: cart } )
    this.setState( { total: Number(this.state.total - item.price*item.quantity) } )
  }

  render () {
    return (
      <Router>
        <div className="App">
          <h1>(⊃｡•́‿•̀｡)⊃━☆ﾟ :｡･:*:･ﾟ’★,｡･:*:･ﾟ’☆</h1>
          <h2>Pizza App!</h2>
          <p>Welcome to our shop! Press "Menu" and choose your pizza!</p>
          <Navigation />
          <Switch>  
            <Route 
            path="/menu"
            render={() => <Menu 
              pizzas={this.state.pizzas}
              add={this.addButtonHandler}
              inc={this.incButtonHandler}
              dec={this.decButtonHandler}
              onPizzaChange={this.handlePizzaChange}
              />}/>
            <Route
            path="/cart"
            render={() => <Cart
              cart={this.state.cart}
              total={this.state.total}
              clicked={this.orderButtonHandler}
              inc={this.cartIncButtonHandler}
              dec={this.cartDecButtonHandler}
              itemInc={this.handleIncItemChange}
              itemDec={this.handleDecItemChange}
              itemDel={this.handleItemRemove}/>}
            />
          </Switch> 
        </div>
      </Router>    
    );
  }
}

export default App;
