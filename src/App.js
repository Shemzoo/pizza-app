import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    pizzas: [
      { id: 1,
        name: 'Margherita',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 2,
        name: 'Carbonara',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 3,
        name: 'Crudo',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 4,
        name: 'Pugliese',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 5,
        name: 'Romana',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 6,
        name: 'Schiacciata',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 7,
        name: 'Americana',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  
      { id: 8,
        name: 'Gorgonzola',
        price: 15,
        inCart: false,
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  }

  render () {
    return (
      <Router>
        <div className="App">
          <h1>Pizza App</h1>
          <Navigation />
          <Switch>
            {/* <Route 
            path="/" exact
            component={App} /> */}  
            <Route 
            path="/menu"
            render={() => <Menu pizzas={this.state.pizzas}/>} />
          </Switch> 
        </div>
      </Router>    
    );
  }
}

export default App;
