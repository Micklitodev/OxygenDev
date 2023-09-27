import React from 'react';

const Button = ({ children, className }: any) => {
    return (
        <button className={` px-2 py-2 border rounded-lg ${className}`}>
            {children}
        </button>
    );
}

export default Button;