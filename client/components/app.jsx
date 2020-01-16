import React from 'react';
import Header from './header';
import ProductDetail from './product-details.jsx';
import ProductList from './product-list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState(() => ({
      view: {
        name: name,
        params: params
      }
    }));
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('api/cart')
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          cart: jsonData
        });
      });
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        const cartCopy = [...this.state.cart];
        cartCopy.push(jsonData);
        this.setState({
          cart: cartCopy
        });
      });
  }

  render() {
    const stateName = this.state.view.name;
    const cartItemCount = this.state.cart.length;
    let detail;

    if (stateName === 'details') {
      detail = <ProductDetail
        productId= { this.state.view.params.productId }
        onClick={ this.setView }
        onSubmit={ this.addToCart }
      />;
    } else {
      detail = <ProductList onClick={ this.setView } />;
    }

    return (
      <>
        <Header cartItemCount={ cartItemCount }/>
        { detail }
      </>
    );
  }
}

export default App;
