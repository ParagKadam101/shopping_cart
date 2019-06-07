import  React  from 'react';

function Product(props) {
    const images = require.context('../img', true)
    const [product] = [props.product]
    
    const style =  {
        width: "18rem"
    } 

    const classForBtn = product.inCart ? 'btn bg-success btn-success' : 'btn btn-primary bg-primary'
    
    return (
        <div className="card" style={style}>
            <img src={images(product.img)} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <button onClick={() => props.onAddToCartClick(product)} className={classForBtn}>{product.inCart ? <b>In Cart</b> : <b>Add to cart</b>}</button>
            </div>
        </div> 
    )

}

export default Product
 