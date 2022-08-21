import React from 'react';
import { useHistory } from 'react-router-dom';

function About(props) {
    const {goBack} = useHistory();
    return (
        <>
            <button className='btn' style={{margin: '1rem 0 1rem'}} onClick={goBack} >Go Back</button>
            <h1>
                Привет из About
            </h1>
        </>
    );
}

export default About;
