import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import s from './Delivery.module.css';
import pita from '../../fonts/pita.png';
import burger from '../../fonts/burger.png';
import shawarma from '../../fonts/shawarma.png';
import { useTelegram } from '../../hooks/useTelegram';
import './Delivery.css';
import Form from '../form/Form';
import { Route, Routes } from 'react-router-dom';
import Map from './map/Map';
import Write from './write/Write';

const Delivery = () => { 
    
    const [adress, setAdress] = useState()

    const onChangeAdress = (e) => {
        setAdress(e.target.value)
    }
    
    return (
        <>
            <Form adress={adress} />
            <div className={s.deliveryForm}>
                <h2>Адрес</h2>
                <input className={s.allInput} type='text' placeholder='Город, улица и дом' value={adress} onChange={onChangeAdress}></input>                
            </div>
        </>
    );
}

export default Delivery;
