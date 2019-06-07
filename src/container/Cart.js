/* eslint-disable jsx-a11y/anchor-is-valid */

import  React, { Component }  from 'react';
import actionTypes from '../actionTypes';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';

class Cart extends Component {

    handleItemIncrement = (cartItem) => {
        this.props.incrementItem(cartItem)
    }

    handleItemDecrement = (cartItem) => {
        this.props.decrementItem(cartItem)
    }

    handleItemRemove = (cartItem) => {
        this.props.removeItem(cartItem)
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="m-3">Product</th>
                                    <th className="m-3">Quantity</th>
                                    <th className="m-3 text-center">Price</th>
                                    <th className="m-3 text-center">Total</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    this.props.cart.items.map(item => 
                                    <CartItem 
                                        key={item.id}
                                        cartItem={item}
                                        onItemIncrement={this.handleItemIncrement} 
                                        onItemDecrement={this.handleItemDecrement} 
                                        onItemRemove={this.handleItemRemove}/>
                                    )
                                }

                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h3>Total</h3></td>
                                    <td className="text-right"><h3><strong>{this.props.cart.cartPrice}</strong></h3></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                    <button type="button" className="btn btn-success">
                                        Checkout <span className="glyphicon glyphicon-play"></span>
                                    </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        incrementItem: (cartItem) => {
            dispatch({
                type: actionTypes.incrementItem,
                payload: cartItem
            })    
        },
        decrementItem: (cartItem) => {
            dispatch({
                type: actionTypes.decrementItem,
                payload: cartItem
            })
        },
        removeItem: (cartItem) => {
            dispatch({
                type: actionTypes.removeItem,
                payload: cartItem
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart) 