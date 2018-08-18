import React, { Component } from 'react';

import Hole from './hole';

export default function Holes(){
    return (
        <div className="holes">
            <Hole size="1" position={{x:12, y:58}} />
            <Hole size="2" position={{x:30, y:10}} />
            <Hole size="2" position={{x:40, y:60}} />
            <Hole size="1" position={{x:33, y:33}} />
            <Hole size="3" position={{x:70, y:48}} />
            <Hole size="1" position={{x:62, y:18}} />
            <Hole size="1" position={{x:72, y:74}} />
        </div>
    )
}