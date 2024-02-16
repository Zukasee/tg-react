import React, { useContext } from 'react';
import { userContext } from '../../App';
import Form from '../form/Form';

const PickUp = () => {

    const ownadress = 'самовывоз'

    return (
        <div>
            <Form adress={ownadress}/>
        </div>
    );
}

export default PickUp;
