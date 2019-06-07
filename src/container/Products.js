import React from 'react'
import Product from '../components/Product'
import {connect} from 'react-redux'
import actionTypes from '../actionTypes';

class Products extends React.Component {
    render() {
        console.log("render")
        return(
            <div className="container">
                <div className="row">
                    {
                        this.props.products.map(product => 
                            <div key={product.id} className="col-md-3 p-1"> 
                                <Product 
                                    product={product} 
                                    onAddToCartClick={(product) => this.addToCartAndUpdateProduct(product)}
                                />
                                <br/>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    addToCartAndUpdateProduct = (product) => {
        this.props.addToCart(product)

        const [products] = [this.props.products]
        const index = products.map(p => p.id).indexOf(product.id)
        const length = products.length
        let productToAdd = {...product}
        productToAdd.inCart = true
        let updatedProducts = [...products.slice(0,index), productToAdd, ...products.slice(index+1, length)]
        this.props.updateProducts(updatedProducts)
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps")
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch({
                type: actionTypes.addToCart,
                payload: product
            })    
        },
        updateProducts: (products) => {
            dispatch({
                type: actionTypes.updateProducts,
                payload: products
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)