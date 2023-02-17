import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart4 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        console.log(divRef.current);

        const data = [
            {
                value: 0.25,
                name: '非付费新客户',
                itemStyle: {
                    borderColor: '#161919',
                    borderWidth: px(2)
                }
            },
            {value: 0.25, name: '付费新客户'},
            {value: 0.19, name: '付费复购客户'},
            {value: 0.31, name: '非付费复购客户'}
        ];
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                orient: 'vertical',
                right: px(18),
                top: px(36),
                bottom: px(20),
                textStyle: {color: '#bcc5c6'},
                fontSize: px(8),
                itemWidth: px(4),
                itemHeight: px(4),
                itemGap: px(12),
                icon: 'rect',
                formatter(name) {
                    // @ts-ignore
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    label: {
                        position: 'center',
                        show: true,
                        formatter: () => {
                            return '总客户'
                        },
                        color: '#e5edf1',
                        lineHeight: 16,
                        fontSize: px(8),
                    },
                    center: ['26%', '50%'],
                    type: 'pie',
                    radius: ['36%', '52%'],
                    // label: {show: false},
                    labelLine: {show: false},
                    data: data,

                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color: [
                '#2a9ea0',
                '#33cccd',
                '#63d7d9',
                '#79a3cb',
                '#9ab9d8',
                '#b6cce2'
            ],
        }));
    }, []);

    return (
        <div className="chart4">
            <div ref={divRef} className="chart"/>
        </div>
    );
};
