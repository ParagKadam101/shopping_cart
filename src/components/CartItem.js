/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

function CartItem(props) {

    const linkStyle = {
        width: '72px', 
        height: '72px'
    }

    const tableDataStyle = {
        textAlign: 'center',
    }

    return(
        <tr>
            <td className="col-md-3">
                <div className="media">
                    <a className="thumbnail pull-left mr-3 " href="#"> 
                        <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={linkStyle} alt="">
                        </img> 
                    </a>
                    <div className="media-body ml-3 mt-1">
                        <h4 className="media-heading"><a href="#">{props.cartItem.title}</a></h4>
                        <h5 className="media-heading"> by <a href="#">{props.cartItem.company}</a></h5>
                    </div>
                </div>
            </td>
            <td className="col-md-3" >
                <button 
                    onClick={() => props.onItemDecrement(props.cartItem)} 
                    className="btn btn-success"> 
                    - 
                </button>  
                <label className="form-control"> {props.cartItem.count} </label>
                <button 
                    onClick={() => props.onItemIncrement(props.cartItem)}
                    className="btn btn-success"> 
                    + 
                </button>
            </td>
            <td style={tableDataStyle}className="col-md-1 text-center mt-3">
                <strong>{props.cartItem.price}</strong>
            </td>
            <td className="col-md-1 text-center mt-3">
                <strong>{props.cartItem.totalPrice}</strong>
            </td>
            <td className="col-md-1">
                <button onClick={() => props.onItemRemove(props.cartItem)} className="btn btn-danger">
                    <span className="glyphicon glyphicon-remove"></span> 
                    Remove
                </button>
            </td>
        </tr>
    )
}

export default CartItem