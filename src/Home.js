import React from 'react';
import "./Home.css";
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src={process.env.PUBLIC_URL + '/img/image1.webp'}
            alt="banner"
            />


        {/*product id,title,price,rating */}
       <div className="home__row">
        <Product
        id="123"
        title="The lean startup: how are you"
        price={11.96}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
        id="123"
        title="The lean startup: how are you"
        price={11.96}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        </div>

        <div className="home__row">
        <Product
        id="123"
        title="The lean startup: how are you"
        price={11.96}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
        id="123"
        title="The lean startup: how are you"
        price={11.96}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />

        <Product
        id="123"
        title="The lean startup: how are you"
        price={11.96}
        rating={3}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        </div>


        <div className="home__row">
        <Product
        id="123"
        title="The lean startup: how are you"
        price={11.96}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        /></div>
        </div>
    )
}

export default Home
