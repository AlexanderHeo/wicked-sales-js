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
      return null;
    } else {
      const price = `$${(product.price / 100).toFixed(2)}`;
      return (
        <div className="container border mt-5">

          <div className="row">
            <ReturnToCatalog
              view={ this.props.onClick }
            />
          </div>

          <div className="container">
            <div className="row" style={{ height: '400px' }}>

              <Item
                image={ product.image }
                name={ product.name }
                price={ price }
                shortDescription={ product.shortDescription }
                addtocart={ this.props.onSubmit }
                id={ product.productId }
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
      <div className="d-flex h25">
        <img
          src={ props.image }
          alt={ props.name }
          style={{ maxHeight: '400px' }}
        />
        <div className="d-flex flex-column">
          <h3>{ props.name }</h3>
          <h5 className="text-success">{ props.price }</h5>
          <p>{ props.shortDescription }</p>
          <div>
            <button
              className="btn btn-primary"
              onClick ={ () => props.addtocart({ productId: props.id }) }>Add to Cart
            </button>
          </div>
        </div>
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

function ReturnToCatalog(props) {
  return (
    <p
      onClick={() => props.view('catalog', {})}
      style={{ cursor: 'pointer' }}
    >
      &lt;Back to Catalog
    </p>
  );
}

export default ProductDetails;
