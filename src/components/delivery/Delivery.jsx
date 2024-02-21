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
    const [entrance, setEntrance] = useState();
    const [doorCode, setDoorCode] = useState();
    const [floor, setFloor] = useState();
    const [apartment, setApartment] = useState();
    const [fullAddress, setfullAdress] = useState();

    const [adress, setAdress] = useState({
        fullAddress: '',
        entrance: '',
        doorCode: '',
        floor: '',
        apartment: '',
    });

    const onChangeAdress = (e) => {
        setAdress({
            ...adress,
            fullAddress: e.target.value,
        });
    }

    const onChangeEntrance = (e) => {
        setAdress({
            ...adress,
            entrance: e.target.value,
        });
    }

    const onChangeDoorCode = (e) => {
        setAdress({
            ...adress,
            doorCode: e.target.value,
        });
    }

    const onChangeFloor = (e) => {
        setAdress({
            ...adress,
            floor: e.target.value,
        });
    }

    const onChangeApartment = (e) => {
        setAdress({
            ...adress,
            apartment: e.target.value,
        });
    }

    
    return (
        <>
            <Form adress={adress} />
            <div className={s.deliveryForm}>
                <h2>Адрес</h2>
                <input className={s.allInput} type='text' placeholder='Город, улица и дом' value={fullAddress} onChange={onChangeAdress}></input>
                
                <div className={s.inputRow}>
                    <div className={s.miniDiv}>
                        {/* <label>Подъезд</label> */}
                        <input className={s.miniInput} type='text' placeholder='Подъезд' value={entrance} onChange={onChangeEntrance}></input>
                    </div>
                    <div className={s.miniDiv}>
                        {/* <label>Код на двери</label> */}
                        <input className={s.miniInput} type='text' placeholder='Код на двери' value={doorCode} onChange={onChangeDoorCode}></input>
                    </div>
                </div>

                <div className={s.inputRow}>
                    <div className={s.miniDiv}>
                        {/* <label>Этаж</label> */}
                        <input className={s.miniInput} type='text' placeholder='Этаж' value={floor} onChange={onChangeFloor}></input>
                    </div>
                    <div className={s.miniDiv}>
                        {/* <label>Квартира</label> */}
                        <input className={s.miniInput} type='text' placeholder='Квартира' value={apartment} onChange={onChangeApartment}></input>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Delivery;
