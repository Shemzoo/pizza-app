import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    pizzas: [
      { id: 1,
        name: 'Margherita',
        price: 15,
        inCart: false,
        quantity: 1,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 2,
        name: 'Carbonara',
        price: 15,
        inCart: false,
        quantity: 1,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 3,
        name: 'Crudo',
        price: 15,
        inCart: false,
        quantity: 1,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 4,
        name: 'Pugliese',
        price: 15,
        inCart: false,
        quantity: 1,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 5,
        name: 'Romana',
        price: 15,
        inCart: false,
        quantity: 1,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 6,
        name: 'Schiacciata',
        price: 15,
        inCart: false,
        quantity: 1,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 7,
        name: 'Americana',
        price: 15,
        inCart: false,
        quantity: 1,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 8,
        name: 'Gorgonzola',
        price: 15,
        inCart: false,
        quantity: 1,  
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],

    cart: [],

    total: ''

  };

  quantityReset = (pizza) => {
    let pizzas = [...this.state.pizzas]
    const id = pizza.id - 1;
    pizzas[id].quantity = 1;
    this.setState({ pizzas: pizzas })
  }


  buttonClickedHandler = (pizza) => {

    this.setState({ cart: [...this.state.cart, pizza] }) 

    this.setState( { total: Number(this.state.total + pizza.price * pizza.quantity) })
    
  };

  orderButtonHandler = () => {
   alert('Thank you! Order received. Our manager will contact you shortly!') 
  }

  incButtonHandler = (pizza) => {
    let pizzas = [...this.state.pizzas]
    const id = pizza.id - 1
    pizzas[id].quantity += 1

    this.setState({ pizzas: pizzas })
  }

  decButtonHandler = (pizza) => {
    let pizzas = [...this.state.pizzas]
    const id = pizza.id - 1

    if (pizzas[id].quantity > 0) {
      pizzas[id].quantity -= 1
    }                          

    this.setState({ pizzas: pizzas })
  }

  cartIncButtonHandler = (item) => {
    let cart = [...this.state.cart]
    const id = item.id - 1
    cart[id].quantity += 1

    this.setState({ cart: cart })
    console.log(cart)
  };

  cartDecButtonHandler = (item) => {
    // const id = item.id
    // let cart = [...this.state.cart]
    // console.log(cart)
    // console.log(id)
    // console.log(cart[1])
    // let updQuantity = item.quantity - 1;
    // console.log(updQuantity)
  };

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
              clicked={this.buttonClickedHandler}
              inc={this.incButtonHandler}
              dec={this.decButtonHandler}
              />} />
            <Route
            path="/cart"
            render={() => <Cart
              cart={this.state.cart}
              total={this.state.total}
              clicked={this.orderButtonHandler}
              inc={this.cartIncButtonHandler}
              dec={this.cartDecButtonHandler} />}
            />
          </Switch> 
        </div>
      </Router>    
    );
  }
}

export default App;
