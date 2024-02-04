import React from 'react';
import shawarma from '../../fonts/41ba6326746d7aed14737ce4334cad79.jpg';
import './ProductList.css';

const ProductList = () => {

    const menu = [
        {
            section: 'Шаурма',
            items: [
                {
                    name: 'Классическая',
                    img: shawarma,
                    weight: '500г',
                    coast: 9
                },
                {
                    name: 'По корейски',
                    img: shawarma,
                    weight: '400г',
                    coast: 8
                },
                {
                    name: 'Сырная',
                    img: shawarma,
                    weight: '550г',
                    coast: 10
                }
            ]    
        },
        {
            section: 'Пита',
            items: [
                {
                    name: 'Классическая',
                    img: shawarma,
                    weight: '300г',
                    coast: 6
                },
                {
                    name: 'С говядиной',
                    img: shawarma,
                    weight: '300г',
                    coast: 6
                },
                {
                    name: 'Сырная',
                    img: shawarma,
                    weight: '300г',
                    coast: 6
                }
            ]   
        },
        {
            section: 'Бургеры',
            items: [
                {
                    name: 'Гамбургер',
                    img: shawarma,
                    weight: '300г',
                    coast: 4
                },
                {
                    name: 'Чизбургер',
                    img: shawarma,
                    weight: '300г',
                    coast: 4
                },
                {
                    name: 'Двойной чизбургер',
                    img: shawarma,
                    weight: '350г',
                    coast: 6
                }
            ]
        }

    ]

    return (
        <div className="container">
            <h1 className='section'>ProductList</h1>
            {menu.map((section, index) => (
                <div key={index}>
                    <h2 className='section'>{section.section}</h2>
                    <div className="item-container">
                        {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="item">
                                <h3>{item.name}</h3>
                                <img src={item.img} alt={item.name}/>
                                <h4>{item.weight} * {item.coast}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
