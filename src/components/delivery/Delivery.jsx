import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import s from './Delivery.module.css';
import pita from '../../fonts/pita.png';
import burger from '../../fonts/burger.png';
import shawarma from '../../fonts/shawarma.png';
import { useTelegram } from '../../hooks/useTelegram';
import './Delivery.css';
import Form from '../form/Form';

const Delivery = () => { 
    
    const [adress, setAdress] = useState('')

    const onChangeAdress = (e) => {
        setAdress(e.target.value)
    }
    
    return (
        <>
            <Form adress={adress} />
            <input className={s.input} type='text' placeholder='Ваш адресс' value={adress} onChange={onChangeAdress}></input>
        </>
    );
}

export default Delivery;
