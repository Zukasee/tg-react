import React, { useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!country || !street) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }

    }, [country, street])
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.subject)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные для заказа</h3>
            <input className={'input'} type='text' placeholder={'Страна'} value={country} onChange={onChangeCountry}></input>
            <input className={'input'} type='text' placeholder={'Улица'} value={street} onChange={onChangeStreet}></input>
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
}

export default Form;
