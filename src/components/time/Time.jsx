import React, { useState } from 'react';
import s from './Time.module.css';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { Button, Modal } from 'antd';

const Time = () => {
    const [selectedTime, setSelectedTime] = useState(null)
    const [time, setTime] = useState(new Date());
    const [pickerValue, setPickerValue] = useState(dayjs('12:08', 'HH:mm')); // Изменил начальное значение

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
            setSelectedTime(null)
        } else {
            setSelectedTime(index)
        }
    }

    return (
        <div className={s.times}>
            {times.map((timeObject, index) => (
                <div key={index} className={`${s.time} ${index === selectedTime ? s.selectedTime : ''}`} onClick={() => handleClickTime(index)}>
                    {`${formatTime(timeObject.newTime)}`}
                </div>
            ))}
            <div className={`${s.ownTimeText} ${4 === selectedTime ? s.selectedTime : ''}`} onClick={showModal}>
                {selectedTime !== 4 ? pickerValue.format('HH:mm') : <TimePicker value={pickerValue} onOk={(value) => {setPickerValue(dayjs(value)); handleOk();}} format={'HH:mm'}/>}
            </div>
            <Modal title="Укажите время" footer={null} cancelText={'close'} okText={'down'} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={s.modal}>
                <TimePicker value={pickerValue} onOk={(value) => {setPickerValue(dayjs(value)); handleOk();}} format={'HH:mm'}/>
            </Modal>
        </div>
    );
};

export default Time;
