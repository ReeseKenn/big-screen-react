import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import bg from '../images/bg.png';
import {Chart1} from "../components/chart-1";
import {Chart2} from "../components/chart-2";
import {Chart3} from "../components/chart-3";


export const Home = () => {

    const year = new Date().getFullYear()


    return (
        <div className="home" style={{backgroundImage: `url(${bg})`}}>
            <header style={{backgroundImage: `url(${headerBg})`}}>启程跨境运营战略平台</header>
            <main>
                <Chart1/>
                <Chart2/>
                <Chart3/>
                <section className="bordered section4">4</section>
                <section className="bordered section5">5</section>
                <section className="bordered section6">6</section>
                <section className="bordered section7">7</section>
                <section className="bordered section8">8</section>
            </main>
            <footer> &copy; yan {year}</footer>
        </div>
    );
};
