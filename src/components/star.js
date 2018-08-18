import React, { Component } from 'react';

export default function Star({size, position, rotate, classNames}){

    let style = {
        width:size/5+'rem',
        height:size/5+'rem',
        left: position.x+'%',
        top: position.y+'%',
        transform:  `rotate(${rotate || 45}deg)`
    }
    
    return (
        <div className={`star ${classNames}`} style={style} ></div>
    )
}