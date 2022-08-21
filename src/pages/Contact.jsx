import React from 'react';
import { useHistory } from 'react-router-dom';

function Contact(props) {
    const {goBack} = useHistory();
    return (
        <>
            <button className='btn' style={{margin: '1rem 0 1rem'}} onClick={goBack} >Go Back</button>
            <h1>
                Привет из Contact
            </h1>
        </>
    );
}

export default Contact;
