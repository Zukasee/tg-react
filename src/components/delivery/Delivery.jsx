import React, { useContext, useState } from 'react';
import { userContext } from '../../App';

const Delivery = () => {
    const { order } = useContext(userContext);
    const [ userName, setUserName ] = useState();
    const [ phone, setPhone ] = useState();
    const [ adress, setAdress ] = useState();

    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeAdress = (e) => {
        setAdress(e.target.value)
    }

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
            <h2>Введите данные для доставки</h2>
            <input type='text' placeholder='Имя' value={userName} onChange={onChangeUserName}></input>
            <input type='text' placeholder='Имя' value={phone} onChange={onChangePhone}></input>
            <input type='text' placeholder='Имя' value={adress} onChange={onChangeAdress}></input>
        </div>
    );
}

export default Delivery;
