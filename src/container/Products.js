import React from 'react'
import Product from '../components/Product'
import {connect} from 'react-redux'

class Products extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    {
                        this.props.products.map(product => 
                            <div className="col-md-3 p-1"> 
                                <Product 
                                    key={product.id} 
                                    product={product} 
                                />
                                <br/>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products)