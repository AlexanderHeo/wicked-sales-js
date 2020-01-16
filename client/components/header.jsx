import React from 'react';

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="text-light bg-dark d-flex justify-content-between">
            <h1>
              <span className="ml-4"><i className="fas fa-dollar-sign"></i>Wicked Sales<i className="fas fa-dollar-sign"></i></span>
            </h1>
            <p>0 Items <i className="fas fa-shopping-cart mr-5 mt-3"></i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
