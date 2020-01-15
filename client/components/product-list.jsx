import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('api/products')
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          products: jsonData
        });
      });
  }

  render() {
    const products = this.state.products;
    if (products.length === 0) {
      return null;
    } else {
      return (
        <div className="container">
          <div className="row">
            {
              products.map(item => {
                const price = `$${(item.price / 100).toFixed(2)}`;
                return (
                  <Item
                    key={ item.productId }
                    image={ item.image }
                    name={ item.name }
                    price={ price }
                    shortDescription={ item.shortDescription }
                    view={ this.props.onClick }
                    productId={ item.productId }
                  />
                );
              })
            }
          </div>
        </div>
      );
    }
  }

}

function Item(props) {
  const styles = {
    height: '500px',
    cursor: 'pointer'
  };
  return (
    <div
      className="card col-lg-3 col-md-5 col-sm-10 m-4"
      style={styles}
      onClick={() => props.view('details', { productId: props.productId })}
    >
      <img src={props.image} alt={props.name} className="img-fluid h-50"
        style={{ objectFit: 'contain' }} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-text text-secondary">{props.price}</h6>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProductList;
