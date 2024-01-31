import {useTelegram} from '../../hooks/useTelegram.js';
import Button from '../button/button.jsx';
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
}

export default Header;
