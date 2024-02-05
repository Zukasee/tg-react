import React, { useCallback, useEffect, useState } from 'react';
import pita from '../../fonts/pita.png';
import burger from '../../fonts/burger.png';
import shawarma from '../../fonts/shawarma.png';
import './ProductList.css';
import { useTelegram } from '../../hooks/useTelegram';
import { useNavigate } from 'react-router-dom';

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
                    img: pita,
                    weight: '300г',
                    coast: 6
                },
                {
                    name: 'С говядиной',
                    img: pita,
                    weight: '300г',
                    coast: 6
                },
                {
                    name: 'Сырная',
                    img: pita,
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
                    img: burger,
                    weight: '300г',
                    coast: 4
                },
                {
                    name: 'Чизбургер',
                    img: burger,
                    weight: '300г',
                    coast: 4
                },
                {
                    name: 'Чикенбургер',
                    img: burger,
                    weight: '350г',
                    coast: 6
                }
            ]
        }

    ]

    const navigate = useNavigate()
    const [price, setPrice] = useState(0)
    const {tg} = useTelegram()

    const changePrice = (value) => {
        setPrice(price + value)
    }

    const openForm = useCallback(() => {
        navigate('/way')
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', openForm)
        return () => {
            tg.offEvent('mainButtonClicked', openForm)
        }
    }, [])

    useEffect(() => {
        tg.MainButton.setParams({
            text: `Заказать ${price}р`,
        });
    }, [price, tg.MainButton, navigate]);

    useEffect(() => {
        if(price === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, )


    return (
        <div className="container">
            {menu.map((section, index) => (
                <div key={index}>
                    <h2 className='section'>{section.section}</h2>
                    <div className="item-container">
                        {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="item">
                                <h3>{item.name}</h3>
                                <img src={item.img} alt={item.name}/>
                                <h4>{item.coast}р * {item.weight}</h4>
                                <button className='buttonAdd' onClick={() =>changePrice(item.coast)}>Добавить</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
