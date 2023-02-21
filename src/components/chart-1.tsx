import React, {useEffect, useRef} from 'react';
import {Title} from "./title";
import * as echarts from "echarts";
import {px} from "../shared/px";

export const Chart1 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const chartData = {
        2022: [40, 30, 20, 41, 15, 26, 30, 26, 16, 36, 50, 20],
        2023: [10, 20, 36, 51, 35, 46, 37, 18, 29, 30, 65, 45]
    }
    const x = useRef(true)
    useEffect(() => {
        setInterval(() => {
            x.current = !x.current
            const newData = x.current ? {
                2022: [40, 30, 20, 41, 15, 26, 30, 26, 16, 36, 50, 20],
                2023: [10, 20, 36, 51, 35, 46, 37, 18, 29, 30, 65, 45]
            } : {
                2022: [35, 20, 63, 48, 38, 21, 45, 23, 12, 66, 37, 41],
                2023: [20, 43, 56, 32, 47, 38, 19, 21, 46, 53, 62, 55]
            }

            generateChart(newData);
        }, 5000);
    }, []);
    const generateChart = (data) => {
        myChart.current.setOption({
            legend: {
                top: px(10),
                itemWidth: px(4),
                itemHeight: px(4),
                itemGap: 10,
                data: [
                    {name: '今年', icon: 'rect'},
                    {name: '去年', icon: 'rect'}
                ],
                textStyle: {
                    color: '#475d72'
                },
            },
            textStyle: {
                fontSize: px(8),
                color: '#475d72'
            },
            title: {show: false},
            xAxis: {
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#475d72'}
                },
                axisLabel: {
                    fontSize: px(8),
                    // formatter(val) {
                    //     if (val.length > 2) {
                    //         const array = val.split('');
                    //         array.splice(2, 0, '\n');
                    //         return array.join('');
                    //     } else {
                    //         return val;
                    //     }
                    // }
                },
            },
            grid: {
                x: px(4),
                y: px(10),
                x2: px(10),
                y2: px(10),
                containLabel: true
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#475d72'}
                },
                axisLabel: {
                    fontSize: px(8)
                }
            },
            series: [{
                name: '今年',
                type: 'bar',
                barGap: 1,
                barWidth: px(2),
                data: data[2023],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.2,
                            color: '#2b9f9f'
                        }, {
                            offset: 1,
                            color: 'transparent'
                        }]),
                    }
                }
            },
                {
                    name: '去年',
                    type: 'bar',
                    barWidth: px(2),
                    data: data[2022],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0.2,
                                color: '#eca850'
                            }, {
                                offset: 1,
                                color: 'transparent'
                            }]),
                        }
                    }
                }]
        });
    }
    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        myChart.current = echarts.init(divRef.current);
        generateChart(chartData)
    })
    return (
        <section className="bordered section1">
            <Title title="订单成交数统计"/>
            <div ref={divRef} className="chart"/>
        </section>
    )
}