/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <a className="navbar-brand m-2 col-md-4" href="#"><h2 className="ml-1">Shopping Site</h2></a>
                <div className="col-md-6"></div>
                <div className="collapse navbar-collapse col-md-2" id="navbarSupportedContent">
                    <button className="btn btn-outline-success my-2 my-sm-0">My Orders</button>
                    <button className="btn btn-outline-success my-2 my-sm-0 m-2" >Cart(0)</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar