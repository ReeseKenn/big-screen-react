import React, {useEffect, useRef} from 'react';
import {Title} from "./title";
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart3 = () => {
    const divRef = useRef(null);
    const data = [
        [
            ['12.01', 170, 1],
            ['12.07', 100, 1],
            ['12.14', 220, 2],
            ['12.22', 205, 2],
            ['12.28', 280, 1],
            ['01.10', 260, 2],
            ['01.20', 230, 3],
            ['01.28', 240, 1],
        ],
        [
            ['12.02', 100, 1],
            ['12.08', 180, 3],
            ['12.15', 130, 1],
            ['12.24', 140, 2],
            ['12.30', 200, 1],
            ['01.31', 280, 2],
            ['01.07', 270, 3],
            ['01.22', 290, 1]
        ]
    ];
    useEffect(() => {

        var myChart1 = echarts.init(divRef.current);
        myChart1.setOption(createEchartsOptions({
            grid: {
                x: px(10),
                y: px(30),
                x2: px(10),
                y2: px(10),
                containLabel: true
            },
            legend: {
                top: px(10),
                data: ['国内', '国外'],
                textStyle: {
                    color: '#475d72'
                },
                itemStyle: [{
                    color: 'rgba(105,216,217,0.3)',
                    borderColor: '#69d8d9',
                    borderWidth: px(1)
                }, {
                    color: 'rgba(236,168,80,0.3)',
                    borderColor: '#eca850',
                    borderWidth: px(1)
                }]

            },
            xAxis: {
                type: 'category',
                data: ['12.01', '12.02', '12.07', '12.08', '12.14', '12.15', '12.22', '12.24', '12.28', '12.30', '01.07', '01.10', '01.15', '01.15', '01.20', '01.22', '01.28', '01.31'],
                axisTick: {show: false},
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
                    name: '国内',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        console.log(data)
                        // return Math.sqrt(data[2]) / 5e2;
                        return data[2] * 10;
                    },
                    label: {
                        emphasis: {
                            show: false,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        color: 'rgba(105,216,217,0.3)',
                        borderColor: '#69d8d9',
                        borderWidth: px(1)
                    }
                }
                ,
                {
                    name: '国外',
                    data: data[1],
                    type: 'scatter',
                    symbolSize: function (data) {
                        // return Math.sqrt(data[2]) / 5e2;
                        return data[2] * 10;
                    },
                    label: {
                        emphasis: {
                            show: false,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        color: 'rgba(236,168,80,0.3)',
                        borderColor: '#eca850',
                        borderWidth: px(1)
                    }
                }]
        }))
    }, []);

    return (
        <section className="bordered section3">
            <Title title="服务流向质量趋势"/>
            <div ref={divRef} className="chart">123</div>
        </section>
    );
};
