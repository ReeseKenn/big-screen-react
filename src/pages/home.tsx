import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import bg from '../images/bg.png';
import {Chart1} from "../components/chart-1";
import {Chart2} from "../components/chart-2";
import {Chart3} from "../components/chart-3";
import {Chart6} from "../components/chart-6";
import {Chart7} from "../components/chart-7";
import {Chart8} from "../components/chart-8";
import {Title} from "../components/title";
import {Chart5} from "../components/chart-5";
import {Chart4} from "../components/chart-4";


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
                <section className="bordered section5">
                    <Title title="客户情况及店铺成交排行"/>
                    <div className="chartGroup">
                        <Chart4/>
                        <Chart5/>
                    </div>
                </section>
                <Chart6/>
                <Chart7/>
                <Chart8/>
            </main>
            <footer> &copy; yan {year}</footer>
        </div>
    );
};
