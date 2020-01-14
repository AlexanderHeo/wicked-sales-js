import React from 'react';
import Header from './header';
import ProductList from './product-list.jsx';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <ProductList />
      </>
    );
  }
}

export default App;
