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
    return (
        <>
            <Form />
        </>
    );
}

export default Delivery;
