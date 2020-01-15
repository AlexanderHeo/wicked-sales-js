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
      }
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
    // console.log(this.state.view.name);
    // console.log(this.state.view.params.productId);
    const stateName = this.state.view.name;
    let detail;

    if (stateName === 'details') {
      detail = <ProductDetail productId= { this.state.view.params.productId } />;
    } else {
      detail = <ProductList onClick={this.setView} />;
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
