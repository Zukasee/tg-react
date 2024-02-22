import React, { useEffect } from 'react';
import c from './Way.module.css';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from '../../hooks/useTelegram';

const Way = () => {
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.hide()
    }, [])

    const navigate = useNavigate()

    const inDelivery = () => {
        navigate('/delivery')
    }

    const inPickUp = () => {
        navigate('/pickUp')
    }

    const inProductList = () => {
        navigate('/')
    }

    return (
        <div>
            <button onClick={inDelivery} className={c.delivery}>
                <h1 className={c.textDelivery}>Доставка</h1>
            </button>
            <button onClick={inPickUp} className={c.pickup}>
                <h1>Самовывоз</h1>
            </button>
            <button onClick={inProductList} className={c.productList}>
                <h1>Редактировать заказ</h1>
            </button>
        </div>
    );
}

export default Way;
