import React, { Component } from 'react';
import Holes from './holes';

export default function Moon({brightLine}){
    let style = {
        backgroundImage:`radial-gradient(circle at 90% 10%,#f4e3da 0, #f4e3da ${brightLine}%, #cab8b0 ${brightLine}%, #cab8b0 100%)`
    };
    return (
        <div className="moon">
            {/* 光环 */}
            <div className="ring"></div>
            {/* 亮面 */}
            <div className="birght" style={ style }></div>
            {/* 阴影 */}
            <Holes />
        </div>
    )
}