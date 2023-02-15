import React, {useEffect, useRef} from 'react';
import {Title} from "./title";
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart7 = () => {
    const divRef = useRef(null);

    useEffect(() => {
        var myChart1 = echarts.init(divRef.current);
        myChart1.setOption(createEchartsOptions({
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
                    data: [36, 43, 32, 46, 60, 53, 67, 80, 78, 80, 75, 87],
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
                    data: [22, 38, 89, 50, 48, 33, 42, 35, 39, 47, 31, 52],
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
        }))
    }, []);

    return (
        <section className="bordered section7">
            <Title title="店铺评分趋势"/>
            <div ref={divRef} className="chart">123</div>
        </section>
    );
};
