import React, { useCallback, useContext, useEffect, useState } from 'react';
import pita from '../../fonts/pita.png';
import burger from '../../fonts/burger.png';
import shawarma from '../../fonts/shawarma.png';
import './ProductList.css';
import { useTelegram } from '../../hooks/useTelegram';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const ProductList = () => {

    const menu = [
        {
            section: 'Шаурма',
            items: [
                {
                    name: 'Классическая',
                    img: shawarma,
                    weight: '500г',
                    coast: 9,
                    id: 1
                },
                {
                    name: 'По корейски',
                    img: shawarma,
                    weight: '400г',
                    coast: 8,
                    id: 2
                },
                {
                    name: 'Сырная',
                    img: shawarma,
                    weight: '550г',
                    coast: 10,
                    id: 3
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
                    coast: 6,
                    id: 4
                },
                {
                    name: 'С говядиной',
                    img: pita,
                    weight: '300г',
                    coast: 6,
                    id: 5
                },
                {
                    name: 'Сырная',
                    img: pita,
                    weight: '300г',
                    coast: 6,
                    id: 6
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
                    coast: 4,
                    id: 7
                },
                {
                    name: 'Чизбургер',
                    img: burger,
                    weight: '300г',
                    coast: 4,
                    id: 8
                },
                {
                    name: 'Чикенбургер',
                    img: burger,
                    weight: '350г',
                    coast: 6,
                    id: 9
                }
            ]
        }
    ]

    const {order, setOrder}= useContext(userContext)
    const navigate = useNavigate()
    const {tg} = useTelegram()

    const changePrice = (item) => {
        // Создаем копию объекта с заказом
        const updatedOrder = { ...order };

        // Находим секцию, к которой принадлежит товар
        const section = menu.find((sec) => sec.items.some((menuitem) => menuitem.id === item.id));
    
        if (section) {
            // Если секция найдена
            const sectionName = section.section;
            const itemName = `${sectionName} ${item.name}`;
    
            if (updatedOrder[item.id]) {
                // Увеличиваем количество товара в заказе, если он уже был добавлен
                updatedOrder[item.id].quantity++;
            } else {
                // Добавляем новый товар в заказ
                updatedOrder[item.id] = {
                    id: item.id,
                    name: itemName,
                    coast: item.coast,
                    weight: item.weight,
                    quantity: 1,
                };
            }
        }

        // Обновляем состояние заказа
        setOrder(updatedOrder);
    }

    const openForm = useCallback(() => {
        tg.MainButton.hide();
        navigate('/way');
    }, [tg.MainButton, navigate]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', openForm);
        return () => {
            tg.offEvent('mainButtonClicked', openForm);
        }
    }, [openForm, tg]);

    useEffect(() => {
        // Вычисляем общую стоимость заказа
        const totalCost = Object.values(order).reduce((total, item) => total + item.coast * item.quantity, 0);
        
        tg.MainButton.setParams({
            text: `Заказать ${totalCost}р`,
        });
    }, [order, tg.MainButton]);

    useEffect(() => {
        // Показываем или скрываем кнопку в зависимости от наличия товаров в заказе
        if (Object.keys(order).length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [order, tg.MainButton]);

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
                                <button className='buttonAdd' onClick={() => changePrice(item)}>Добавить</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
