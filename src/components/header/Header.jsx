import React from 'react';
import './Header.css';
import { useTelegram } from '../../hooks/useTelegram.js';
import Button from '../button/Button.jsx';

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className='header'>
            {/* <Button onClick={onClose}>закрыть</Button>
            <span className='username'>
                {user?.username}
            </span> */}
        </div>
    );
}

export default Header;