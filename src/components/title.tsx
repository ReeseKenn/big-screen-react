import React from 'react';
import './title.scss'

export const Title = (props) => {
    const {title} = props;
    return (
        <div className="title">
            <div className="triangle"/>
            <h2>{title}</h2>
            <div className="parallelogram"/>
            <div className="parallelogram opacity"/>
        </div>
    )
}