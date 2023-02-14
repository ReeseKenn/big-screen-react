import {px} from './px';

export const baseEchartOptions = {

    textStyle: {
        fontSize: px(8),
        color: '#475d72'
    },
    title: {show: false},
    legend: {show: false},
    grid: {
        x: px(10),
        y: px(10),
        x2: px(10),
        y2: px(10),
        containLabel: true
    },
};
