import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <button className='button_apply'>{props.name}</button>
    );
}

export default Button;