import React, { useContext } from 'react';
import { userContext } from '../../App';
import Form from '../form/Form';
import Time from '../time/Time';

const PickUp = () => {

    const ownadress = {
        fullAddress : "самовывоз"
    }

    return (
        <div>
            <Form adress={ownadress}/>
            <Time />
        </div>
    );
}

export default PickUp;
