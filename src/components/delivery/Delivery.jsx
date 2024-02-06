import React, { useContext } from 'react';
import { userContext } from '../../App';

const Delivery = () => {
    const { order } = useContext(userContext);

    return (
        <div>
            <h2>Итоговый заказ</h2>
            <ul>
                {Object.values(order).map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} шт. - {item.coast * item.quantity}р
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Delivery;
