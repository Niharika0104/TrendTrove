import React from 'react';
import './KidSection.css';
import kid1 from './Product/kid1.jpeg';
import kid2 from './Product/kid2.jpeg';
import kid3 from './Product/kid3.jpeg';
import kid4 from './Product/kid4.jpeg';
import kid5 from './Product/kid5.jpeg';
import kid6 from './Product/kid6.jpeg';
import kid7 from './Product/kid7.jpeg';
import kid8 from './Product/kid9.jpeg';
import kid9 from './Product/kid10.jpeg';
import kid10 from './Product/kid11.jpeg';
import kid11 from './Product/kid12.jpeg';
import kid12 from './Product/kid13.jpeg';
import kid13 from './Product/kid14.jpeg';
import kid14 from './Product/kid8.jpeg';
import kid15 from './Product/kid15.jpeg';
import kid16 from './Product/kid16.jpeg';                                                                   
import kid17 from './Product/kid17.jpeg';                                                                   
import kid18 from './Product/kid18.jpeg';
import kid19 from './Product/kid19.jpeg';
import kid20 from './Product/kid20.jpeg';
import kid21 from './Product/kid21.jpeg';

const KidSection = () => {
    const kidClothing = [
        { id: 3, name: "Kids's Jacket", price: "$60", image: kid1 },
        { id: 5, name: "Kids's Jacket", price: "$80", image: kid2 },
        { id: 9, name: "Kids's Jacket", price: "$80", image: kid3 },
        { id: 10, name: "Kids's Jacket", price: "$80", image: kid4 },
        { id: 11, name: "Kids's Jacket", price: "$80", image: kid5 },
        { id: 12, name: "Kids's Jacket", price: "$80", image: kid6 },
        { id: 13, name: "Kids's Jacket", price: "$80", image: kid7 },

    ];

    const kidtshirt = [
        { id: 3, name: "Kids's T-Shirt", price: "$60", image: kid8 },
        { id: 5, name: "Kids's T-Shirt", price: "$80", image: kid9 },
        { id: 9, name: "Kids's T-Shirt", price: "$80", image: kid10 },
        { id: 10, name: "Kids's T-Shirt", price: "$80", image: kid11 },
        { id: 11, name: "Kids's T-Shirt", price: "$80", image: kid12 },
        { id: 12, name: "Kids's T-Shirt", price: "$80", image: kid13 },
        { id: 13, name: "Kids's T-Shirt", price: "$80", image: kid14 },

    ];

    const kidpants = [
        { id: 3, name: "Kids's Pnts", price: "$60", image: kid15 },
        { id: 5, name: "Kids's Pants", price: "$80", image: kid16 },
        { id: 9, name: "Kids's Pants", price: "$80", image: kid17 },
        { id: 10, name: "Kids's Pants", price: "$80", image: kid18 },
        { id: 11, name: "Kids's Pants", price: "$80", image: kid19 },
        { id: 12, name: "Kids's Pants", price: "$80", image: kid20 },
        { id: 13, name: "Kids's Pants", price: "$80", image: kid21 },

    ];

    return (
        <div className="kid-section">
            <h1>Kid's Section</h1>
            <h2>Kid's Jacket</h2>
            <div className="product-list">
                {kidClothing.map(item => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} className="product-image" />
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">{item.price}</p>
                    </div>
                ))}
            </div>

            <h2>Kid's T-Shirt</h2>
            <div className="product-list">
                {kidtshirt.map(item => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} className="product-image" />
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">{item.price}</p>
                    </div>
                ))}
            </div>

            <h2>Kid's Pants</h2>
            <div className="product-list">
                {kidpants.map(item => (
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

export default KidSection;
