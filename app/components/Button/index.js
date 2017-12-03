import React from 'react';

const Button = ({ label="Button", color='#494949', fontSize='20', backgroundColor='#a7b6ce' }) => (
    <button style={{
        color, fontSize, backgroundColor
    }}>{label}</button>
);

export default Button;