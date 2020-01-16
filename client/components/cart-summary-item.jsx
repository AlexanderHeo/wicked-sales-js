import React from 'react';

function CartSummaryItem(item) {
  return (
    <div className="container border mb-5">
      <div className="container">
        <div className="row w75" style={{ height: '250px' }}>
          <div className="d-flex">
            <img className="w25 mr-3" src={ item.image } alt={ item.name } style={{ maxHeight: '250px', width: '400px', objectFit: 'contain' }}></img>
            <div className="w75 d-flex flex-column">
              <h3>{ item.name }</h3>
              <h5>{ item.price }</h5>
              <p>{ item.shortDescription }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
