import React, { Component } from 'react';

export default function Hole({size, position}){

    let style = {
        width:size+'rem',
        height:size+'rem',
        borderRadius:'50%',
        position: 'absolute',
        left: position.x+'%',
        top: position.y+'%',
        background:'#cbb9b1',
        border: `1px solid #f4e3da`,
        boxShadow:`inset -${size/2}px ${size/2}px 0 ${size/1.8}px #b7a59f`,
        zIndex:100
    }
    
    return (
        <div className="hole" style={style} ></div>
    )
}