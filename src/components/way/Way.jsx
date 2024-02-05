import React from 'react';
import c from './Way.module.css';

const Way = () => {
    return (
        <div>
            <div className={c.delivery}>
                <h1 className={c.textDelivery}>Доставка</h1>
            </div>
            <div className={c.pickup}>
                <h1>Самовывоз</h1>
            </div>
        </div>
    );
}

export default Way;
