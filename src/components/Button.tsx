'use client';
import React from 'react';

const Button = ({Fn,component}:{component: React.ReactElement;Fn: VoidFunction;}) => {
    return (
        <>
        {React.cloneElement(component, { onClick: Fn })}
        </>
    );
};

export default Button;
