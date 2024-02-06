import React, { useContext } from 'react';
import { userContext } from '../../App';

const PickUp = () => {

    const {order, setOrder} = useContext(userContext)

    return (
        <div>
            PickUp
            {order}
        </div>
    );
}

export default PickUp;
