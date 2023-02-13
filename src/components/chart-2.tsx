import React, {useEffect, useRef} from 'react';
import {Title} from "./title";
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart2 = () => {
    const divRef = useRef(null);

    useEffect(() => {
        const data = [
            {value: 0.32, name: '宠物相关'},
            {value: 0.25, name: '乐器相关'},
            {value: 0.15, name: '摄影器材'},
            {value: 0.15, name: '数码电子'},
            {value: 0.06, name: '幼儿玩具'},
            {value: 0.05, name: '服饰'},
            {value: 0.02, name: '家居'}
        ];
        var myChart1 = echarts.init(divRef.current);
        myChart1.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: px(20),
                top: px(18),
                bottom: px(20),
                textStyle: {color: '#bcc5c6'},
                itemWidth: px(8),
                itemHeight: px(8),
                itemGap: px(18),
                icon: 'rect',
                formatter(name) {
                    // @ts-ignore
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return ' ' + name + '          ' + value;
                }
            },
            series: [

                {
                    center: ['26%', '46%'],
                    type: 'pie',
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    radius: '60%',
                    label: {show: false},
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
                '#96e3e2',
                '#79a3cb',
                '#9ab9d8',
                '#b6cce2'
            ],
        }));
    }, []);

    return (
        <section className="bordered section2">
            <Title title="产品大类占比"/>
            <div ref={divRef} className="chart">123</div>
        </section>
    );
};
