import React, { useEffect } from 'react';
import c from './Way.module.css';
import { useNavigate } from 'react-router-dom';

const Way = () => {
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

    return (
        <div>
            <button onClick={inDelivery} className={c.delivery}>
                <h1 className={c.textDelivery}>Доставка</h1>
            </button>
            <button onClick={inPickUp} className={c.pickup}>
                <h1>Самовывоз</h1>
            </button>
        </div>
    );
}

export default Way;
