import React, { useContext } from 'react';
import { userContext } from '../../App';

const Delivery = () => {

    const {order, seOrder} = useContext(userContext)

    return (
        <div>
            Delivery
            {order}
        </div>
    );
}

export default Delivery;
