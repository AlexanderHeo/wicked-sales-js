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
  }

  setView(name, params) {
    this.setState(() => ({
      view: {
        name: name,
        params: params
      }
    }));
  }

  render() {
    const stateName = this.state.view.name;
    let detail;

    if (stateName === 'details') {
      detail = <ProductDetail productId= { this.state.view.params.productId } onClick={ this.setView } />;
    } else {
      detail = <ProductList onClick={ this.setView } />;
    }

    return (
      <>
        <Header />
        { detail }
      </>
    );
  }
}

export default App;
