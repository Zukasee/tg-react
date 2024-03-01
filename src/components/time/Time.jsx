import React, { useState } from 'react';
import s from './Time.module.css';

const Time = () => {
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

    return (
        <div className={s.times}>
            {times.map((timeObject, index) => (
                <div key={index} className={s.time}>
                    {`${formatTime(timeObject.newTime)}`}
                </div>
            ))}
            <div className={s.ownTimeText}>
                свое время
            </div>
        </div>
    );
};

export default Time;
