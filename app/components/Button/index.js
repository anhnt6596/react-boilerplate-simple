import React from 'react';

const Button = ({ label="", color="#494949", backgroundColor="#b7d6ff", margin=12, fontSize=14, onClick }) => (
    <button
        style={{ backgroundColor }}
        onClick={onClick}
    >
        <span style={{ color, margin, fontSize }} >{label}</span>
    </button>
);

export default Button;