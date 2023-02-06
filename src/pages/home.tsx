import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth;

export const Home = () => {
    const divRef = useRef(null)
    useEffect(() => {
        console.log(divRef.current);
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#475d72'
            },
            title: {show: false},
            legend: {show: false},
            xAxis: {
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#475d72'}
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            grid: {
                x: px(40),
                y: px(40),
                x2: px(0),
                y2: px(40),
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#475d72'}
                },
                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [{
                type: 'bar',
                barWidth: px(10),
                itemStyle: {
                    color: '#2b9f9f'
                },
                data: [10, 20, 36, 41, 15, 26, 37, 18, 29, 30, 65, 45]
            }]
        });
    })

    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}>启程跨境运营战略平台</header>
            <main>
                <section className="section1">
                    <div className="bordered sectionA">
                        <h2 className="title">订单成交数统计</h2>
                        <div ref={divRef} className="chart">123</div>
                    </div>
                </section>
                <section className="bordered section2">2</section>
                <section className="bordered section3">3</section>
                <section className="bordered section4">4</section>
                <section className="bordered section5">5</section>
            </main>
        </div>
    );
};
