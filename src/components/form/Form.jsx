import React, { useCallback, useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import s from './Form.module.css';
import pita from '../../fonts/pita.png';
import burger from '../../fonts/burger.png';
import shawarma from '../../fonts/shawarma.png';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {    
    const { order } = useContext(userContext);
    const [ userName, setUserName ] = useState();
    const [ phone, setPhone ] = useState();
    const test = 'test';
    const {tg, queryId} = useTelegram();
    const navigate = useNavigate()

    const openProductList = () => {
        navigate('/')
    } 

    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onSendData = useCallback(() => {
        const data = {
            userName,
            phone,
            test,
            props,
            order,
            queryId,
        }
        tg.sendData(JSON.stringify(data))
        fetch('https://git.heroku.com/morning-scrubland-61652.git', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [userName, phone, props, order, queryId])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])



    useEffect(() => {
        // Вычисляем общую стоимость заказа
        const totalCost = Object.values(order).reduce((total, item) => total + item.coast * item.quantity, 0);
        
        tg.MainButton.setParams({
            text: `Оплатить ${totalCost}р`,
        });
    }, [userName, phone]);

    useEffect(() => {
        // Показываем или скрываем кнопку в зависимости от наличия информации
        if (!userName || !phone || !props.adress.fullAddress) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [userName, phone, props.adress.fullAddress]);

    const images = {
        'Шаурма': shawarma,
        'Пита': pita,
        'Бургеры': burger
      };

    return (
        <div className={s.form}>
            <div className={s.topText}> 
                <h2>ВАШ ЗАКАЗ</h2>
                <h4 className={s.green} onClick={openProductList}>Редактировать заказ</h4>
            </div>
            <ul>
                {Object.values(order).map((item) => (
                    <li key={item.id}>
                        <img className={s.img_item} src={images[item.name.split(' ')[0]]} alt={item.name.split(' ')[0]} />
                        <span className={s.spanName}>{item.name}&nbsp; &nbsp;</span>
                        <span className={s.quantity}>{item.quantity} шт.</span>
                        <span className={s.cost}>{item.coast * item.quantity}р</span>
                    </li>
                ))}
            </ul>
            <h2>Введите данные для заказа</h2>
            <input className={s.input} type='text' placeholder='Имя' value={userName} onChange={onChangeUserName}></input>
            <input className={s.input} type='text' placeholder='Номер телефона' value={phone} onChange={onChangePhone}></input>
        </div>
    );
}

export default Form;
