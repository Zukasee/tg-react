import React, { useState } from 'react';
import s from './Time.module.css';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';


const Time = () => {
    const [selectedTime, setSelctedTime] = useState(null)
    const [time, setTime] = useState(new Date());

    const times = [
        {
            newTime: new Date(time.getTime() + 15 * 60000)
        },
        {
            newTime: new Date(time.getTime() + 20 * 60000)
        },
        {
            newTime: new Date(time.getTime() + 30 * 60000)
        }
    ];

    const formatTime = (date) => {
        return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    };

    const handleClickTime = (index) => {
        if (index === selectedTime) {
            setSelctedTime(null)
        } else {
            setSelctedTime(index)
        }
    }

    return (
        <div className={s.times}>
            {times.map((timeObject, index) => (
                <div key={index} className={`${s.time} ${index === selectedTime ? s.selectedTime : ''}`} onClick={() => handleClickTime(index)}>
                    {`${formatTime(timeObject.newTime)}`}
                </div>
            ))}
            <div className={`${s.ownTimeText} ${4 === selectedTime ? s.selectedTime : ''}`} onClick={() => handleClickTime(4)}>
                {selectedTime !== 4 ? 'свое время' : <TimePicker defaultValue={dayjs('12:08', 'HH:mm')} format={'HH:mm'}/>}
            </div>
        </div>
    );
};

export default Time;
