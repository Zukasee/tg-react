import React, { useContext } from 'react';
import { userContext } from '../../App';
import Form from '../form/Form';

const PickUp = () => {

    const ownadress = {
        fullAddress : "самовывоз"
    }

    return (
        <div>
            <Form adress={ownadress}/>
        </div>
    );
}

export default PickUp;
