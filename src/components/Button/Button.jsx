import React from 'react';
import {CustomButton} from './styles';

const Button = (props) => (
    <CustomButton>
        {props.display}
    </CustomButton>
);


export default Button;