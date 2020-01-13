import React from 'react';

function ProductListItem() {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-3">
          <img src="images/ostrich-pillow.jpg" alt="ostrich pillow" className="img-fluid fit-image" />
          <div className="card-body">
            <h5 className="card-title">Ostrich Pillow</h5>
            <h6 className="card-text text-secondary">$19.99</h6>
            <p className="card-text">Five-year strategic plan products need full resourcing and support from a cross-functional team.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
