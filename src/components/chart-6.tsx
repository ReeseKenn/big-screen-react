import React, {useEffect, useRef} from 'react';
import {Title} from "./title";
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart6 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null)
    const chartData = {
        0: [259, 132, 222, 80, 210, 190, 290],
        1: [101, 305, 89, 111, 105, 68, 121]
    }
    const flag = useRef(true)
    useEffect(() => {
        setInterval(() => {
            flag.current = !flag.current
            const newData = flag.current ? {
                0: [259, 132, 222, 80, 210, 190, 290],
                1: [101, 305, 89, 111, 105, 68, 121]
            } : {
                0: [101, 305, 89, 215, 105, 68, 121],
                1: [259, 132, 222, 80, 210, 190, 310]
            }

            generateChart(newData);
        }, 5000);
    }, []);
    const generateChart = (data) => {
        myChart.current.setOption(createEchartsOptions({
            legend: {
                top: px(10),
                itemWidth: 10,
                itemHeight: 1,
                itemGap: 10,
                data: [
                    {name: '本周', icon: 'rect'},
                    {name: '上周', icon: 'rect'}
                ],
                textStyle: {
                    color: '#475d72'
                },
            },
            grid: {
                left: px(16),
                right: px(10),
                bottom: px(6),
                top: px(30),
                containLabel: true
            },
            xAxis: {
                axisTick: {show: false},
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                max: 400,
                min: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: ['#292e2c']
                    }
                },
                scale: true
            },
            series: [
                {
                    name: '本周',
                    type: 'line',
                    symbol: 'circle',
                    data: data[0],
                    itemStyle: {
                        color: '#69d8d9',
                        shadowColor: '#69d8d9',
                        shadowBlur: px(5)
                    },
                    lineStyle: {
                        width: px(1.2)
                    }
                },
                {
                    name: '上周',
                    // coordinateSystem: 'cartesian2d',
                    // polyline: true,
                    type: 'line',
                    symbol: 'circle',
                    data: data[1],
                    itemStyle: {
                        color: '#eca850',
                        shadowColor: '#eca850',
                        shadowBlur: px(5)
                    },
                    lineStyle: {
                        width: px(1.2)
                    }
                },
                // {
                //     name: '滑行的光点',
                //     type: 'lines',
                //     coordinateSystem: 'cartesian2d',
                //     polyline: true,
                //     effect: {
                //         show: true,
                //         period: 10,
                //         trailLength: 0.1,
                //         symbolSize: 4,
                //         symbol: 'circle',
                //         color: '#fff',
                //     },
                //     data: [{
                //         coords: [
                //             ['Mon', 101],
                //             ['Tue', 205.97],
                //             ['Wed', 332.79],
                //             ['Thu', 281.55],
                //             ['Fri', 398.35],
                //             ['Sat', 214.02],
                //             ['Sun', 214.02],
                //         ]
                //     }
                //     ]
                // }
            ]
        }));
    }
    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        myChart.current = echarts.init(divRef.current);
        generateChart(chartData)
    }, []);

    return (
        <section className="bordered section6">
            <Title title="销售额趋势"/>
            <div ref={divRef} className="chart"/>
        </section>
    );
};
