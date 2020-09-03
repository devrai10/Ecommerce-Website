import React from 'react'
import "./Product.css"
import{ useStateValue} from "./StateProvider";

function Product({id,title,image,price,rating}) {

    const[{basket}, dispatch] = useStateValue();
    const addToBasket=() =>{
        dispatch({
            
            type: "ADD_TO_BASKET",
            item: {
            id: id,
            title: title,
            price: price,
            rating: rating,
        },
        });

    };

    return( <div className="products">
        <div className="product__info">
         <p>{title}</p> 
         <p className="product__price">
             <small>$</small>
             <strong>{price}</strong>
             </p>  
             <div className="product_rating">
            {
                Array(rating)
                .fill()
                .map((_, i) => (
                    <p>*</p>
                ))
            }
        </div>
        </div>

             <img src={image} alt=""/>
             <button onClick={addToBasket}>Add to basket</button>
        </div>);

    
}

export default Product
