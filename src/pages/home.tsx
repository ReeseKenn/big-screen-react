import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';

export const Home = () => {
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}>启程跨境运营战略平台</header>
        </div>
    );
};
