import React from 'react';

function ProductListItem() {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-3">
          <img src="..\..server\public\images\ostrich-pillow.jpg" alt="ostrich pillow"/>
          <div className="card-body">
            <h5 className="card-title">Octopus Pillow</h5>
            <p className="card-text">Five-year strategic plan products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved. We need to button up our approach hit the ground running, one-sheet, nor forcing function.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
