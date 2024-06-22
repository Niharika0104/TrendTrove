import React from 'react';
import './MenSection.css';
import tshirt from './Product/tshirt.jpeg';
import jacket from './Product/product_14.png';
import shirt from './Product/product_17.png';
import leatherjacket from './Product/product_24.png';
import product_19 from './Product/product_19.png';
import product_20 from './Product/product_20.png';
import product_21 from './Product/product_21.png';
import product_22 from './Product/product_22.png';
import product_23 from './Product/product_23.png';
import shirt2 from './Product/shirt2.jpeg';
import shirt1 from './Product/shirt1.jpeg';
import shirt3 from './Product/shirt3.jpeg';
import shirt4 from './Product/shirt4.jpeg';
import shirt5 from './Product/shirt5.jpeg';
import shirt6 from './Product/shirt6.jpeg';
import tshirt2 from './Product/tshirt2.jpeg';
import tshirt1 from './Product/tshirt1.jpeg';
import tshirt3 from './Product/tshirt3.jpeg';
import tshirt4 from './Product/tshirt4.jpeg';
import tshirt5 from './Product/tshirt5.jpeg';
import tshirt6 from './Product/tshirt6.jpeg';
import jeans2 from './Product/jeans2.jpeg';
import jeans1 from './Product/jeans1.jpeg';
import jeans3 from './Product/jeans3.jpeg';
import jeans4 from './Product/jeans4.jpeg';
import jeans5 from './Product/jeans5.jpeg';
import jeans6 from './Product/jeans6.jpeg';
import jeans from './Product/jeans.jpeg';

const MenSection = () => {
    const menClothing = [
        { id: 3, name: "Men's Jacket", price: "$60", image: jacket },
        { id: 5, name: "Men's Leather Jacket", price: "$80", image: leatherjacket },
        { id: 9, name: "Men's Jacket", price: "$80", image: product_19 },
        { id: 10, name: "Men's Jacket", price: "$80", image: product_20 },
        { id: 11, name: "Men's Jacket", price: "$80", image: product_21 },
        { id: 12, name: "Men's Jacket", price: "$80", image: product_22 },
        { id: 13, name: "Men's Jacket", price: "$80", image: product_23 },

    ];
    const menShirt = [
        { id: 4, name: "Men's Shirt", price: "$60", image: shirt },
        { id: 14, name: "Men's Shirt", price: "$80", image: shirt1 },
        { id: 15, name: "Men's Shirt", price: "$80", image: shirt2 },
        { id: 15, name: "Men's Shirt", price: "$80", image: shirt3 },
        { id: 15, name: "Men's Shirt", price: "$80", image: shirt4 },
        { id: 15, name: "Men's Shirt", price: "$80", image: shirt5 },
        { id: 15, name: "Men's Shirt", price: "$80", image: shirt6 },
    ];

    const menTshirt = [
        { id: 1, name: "Men's T-Shirt", price: "$20", image: tshirt },
        { id: 14, name: "Men's T-Shirt", price: "$80", image: tshirt1 },
        { id: 15, name: "Men's T-Shirt", price: "$80", image: tshirt2 },
        { id: 15, name: "Men's T-Shirt", price: "$80", image: tshirt3 },
        { id: 15, name: "Men's T-Shirt", price: "$80", image: tshirt4 },
        { id: 15, name: "Men's T-Shirt", price: "$80", image: tshirt5 },
        { id: 15, name: "Men's T-Shirt", price: "$80", image: tshirt6 },
    ];

    const menJeans = [
        { id: 1, name: "Men's Jeans", price: "$60", image: jeans },
        { id: 14, name: "Men's Jeans", price: "$80", image: jeans1 },
        { id: 15, name: "Men's Jeans", price: "$80", image: jeans2 },
        { id: 15, name: "Men's Jeans", price: "$80", image: jeans3 },
        { id: 15, name: "Men's Jeans", price: "$80", image: jeans4 },
        { id: 15, name: "Men's Jeans", price: "$80", image: jeans5 },
        { id: 15, name: "Men's Jeans", price: "$80", image: jeans6 },
    ];

    return (
        <div className="men-section">
            <h1>Men's Section</h1>
            <h2>Men's Jacket</h2>
            <div className="product-list">
                {menClothing.map(item => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} className="product-image" />
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">{item.price}</p>
                    </div>
                ))}
            </div>
            <h2>Men's Shirt</h2>
            <div className="product-list">
                {menShirt.map(item => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} className="product-image" />
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">{item.price}</p>
                    </div>
                ))}
            </div>

            <h2>Men's T-Shirt</h2>
            <div className="product-list">
                {menTshirt.map(item => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} className="product-image" />
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">{item.price}</p>
                    </div>
                ))}
            </div>

            <h2>Men's Jeans</h2>
            <div className="product-list">
                {menJeans.map(item => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} className="product-image" />
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenSection;
