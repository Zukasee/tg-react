import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import s from './Delivery.module.css';
import pita from '../../fonts/pita.png';
import burger from '../../fonts/burger.png';
import shawarma from '../../fonts/shawarma.png';
import { useTelegram } from '../../hooks/useTelegram';

const Delivery = () => {    
    const { order } = useContext(userContext);
    const [ userName, setUserName ] = useState();
    const [ phone, setPhone ] = useState();
    const [ adress, setAdress ] = useState();
    const {tg} = useTelegram();

    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeAdress = (e) => {
        setAdress(e.target.value)
    }

    useEffect(() => {
        // Вычисляем общую стоимость заказа
        const totalCost = Object.values(order).reduce((total, item) => total + item.coast * item.quantity, 0);
        
        tg.MainButton.setParams({
            text: `Заказать ${totalCost}р`,
        });
    }, [userName, phone, adress]);

    useEffect(() => {
        // Показываем или скрываем кнопку в зависимости от наличия информации
        if (!userName || !phone || !adress) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [userName, phone, adress]);

    return (
        <div className={s.form}>
            <h2>Итоговый заказ</h2>
            <ul>
                {Object.values(order).map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} шт. - {item.coast * item.quantity}р
                    </li>
                ))}
            </ul>
            <h2>Введите данные для доставки</h2>
            <input className={s.input} type='text' placeholder='Имя' value={userName} onChange={onChangeUserName}></input>
            <input className={s.input} type='text' placeholder='Номер телефона' value={phone} onChange={onChangePhone}></input>
            <input className={s.input} type='text' placeholder='Ваш адресс' value={adress} onChange={onChangeAdress}></input>
        </div>
    );
}

export default Delivery;
