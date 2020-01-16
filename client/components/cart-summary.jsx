import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="d-flex flex-column">
            <ReturnToCatalog
              view={ this.props.onClick }
            />
            <div>
              <h2 className="m-3">My Cart</h2>
            </div>

          </div>

          {
            this.props.cart.map(item => {
              const price = `$${(item.price / 100).toFixed(2)}`;
              return (
                <CartSummaryItem
                  key={item.cartItemId}
                  image={item.image}
                  name={item.name}
                  price={price}
                  shortDescription={item.shortDescription}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
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

export default CartSummary;
