/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import store from '../store'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    let [count, setCount] = useState(0)
    store.subscribe(() => setCount(store.getState().cart.items.length))

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <Link to="/" className="navbar-brand m-2 col-md-4"><h2 className="ml-1">Shopping Site</h2></Link>
                <div className="col-md-6"></div>
                <div className="collapse navbar-collapse col-md-2" id="navbarSupportedContent">
                    <Link to="/orders" className="btn btn-outline-success my-2 my-sm-0">My Orders</Link>
                    <Link 
                        to="/cart"
                        className="btn btn-outline-success my-2 my-sm-0 m-2" >
                        Cart({count})
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar