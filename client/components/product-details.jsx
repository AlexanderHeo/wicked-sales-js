import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails(productId) {
    fetch(`api/products/${this.props.productId}`)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          product: jsonData
        });
      });
  }

  render() {
    const product = this.state.product;

    if (!product) {
      return (
        <h2>Waiting to load</h2>
      );
    } else {
      const price = `$${(product.price / 100).toFixed(2)}`;
      return (
        <div className="container border mt-5">

          <div className="row">
            <p>
              &lt;Back to Catalog
            </p>
          </div>

          <div className="container">
            <div className="row" style={{ height: '400px' }}>

              <Item
                image={product.image}
                name={product.name}
                price={price}
                shortDescription={product.shortDescription}
              />

            </div>
          </div>

          <div className="container">
            <div className="row">
              <LongDescription
                longDescription={ product.longDescription }
              />
            </div>
          </div>

        </div>
      );
    }

  }

}

function Item(props) {
  return (
    <>
      <div className="col-lg-4">
        <img
          src={ props.image }
          alt={ props.name }
          className="h-25"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="col-8">
        <h3>{ props.name }</h3>
        <h5 className="text-success">{ props.price }</h5>
        <p>{ props.shortDescription }</p>
      </div>
    </>
  );
}

function LongDescription(props) {
  return (
    <div className="col-12">
      <p>{ props.longDescription }</p>
    </div>
  );
}

export default ProductDetails;
