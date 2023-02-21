import React, {useEffect, useRef} from 'react';
import {Title} from "./title";
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart7 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const chartData = {
        2022: [22, 38, 89, 50, 48, 33, 42, 35, 39, 47, 31, 52],
        2023: [36, 43, 32, 46, 60, 53, 67, 80, 78, 80, 75, 87]
    }
    const flag = useRef(true)
    useEffect(() => {
        setInterval(() => {
            flag.current = !flag.current
            const newData = flag.current ? {
                2022: [22, 38, 89, 50, 48, 33, 42, 35, 39, 47, 31, 52],
                2023: [36, 43, 32, 46, 60, 53, 67, 80, 78, 80, 75, 87]
            } : {
                2022: [35, 20, 63, 48, 38, 21, 45, 47, 69, 66, 48, 57],
                2023: [20, 43, 56, 32, 47, 38, 19, 21, 46, 53, 62, 55]
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
                    {name: '本年', icon: 'rect'},
                    {name: '去年', icon: 'rect'}
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
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                max: 100,
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
                    name: '本年',
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    data: data[2023],
                    itemStyle: {
                        color: '#69d8d9',
                        shadowColor: '#69d8d9',
                        shadowBlur: px(5)
                    },
                    lineStyle: {
                        width: px(1.2)
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#69d8d9'
                        }, {
                            offset: 1,
                            color: 'transparent'
                        }]),
                    }
                },
                {
                    name: '去年',
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    data: data[2022],
                    itemStyle: {
                        color: '#eca850',
                        shadowColor: '#eca850',
                        shadowBlur: px(5)
                    },
                    lineStyle: {
                        width: px(1.2)
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#eca850'
                        }, {
                            offset: 1,
                            color: 'transparent'
                        }]),
                    }
                }
            ]
        }));
    }
    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        myChart.current = echarts.init(divRef.current);
        generateChart(chartData)
    }, []);

    return (
        <section className="bordered section7">
            <Title title="店铺评分趋势"/>
            <div ref={divRef} className="chart"/>
        </section>
    );
};
