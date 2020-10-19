import React from 'react';
import './Button.scoped.scss';

function Button({ children, ...props}) {
    return (
        <button className="button" {...props}>{children}</button>
    );
}

export default Button;
