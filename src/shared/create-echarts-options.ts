import {baseEchartOptions} from './base-echart-options';
import {px} from './px';

export const createEchartsOptions = (options) => {
    const result = {
        ...baseEchartOptions,
        ...options,
    };
    if (!(options?.xAxis?.axisLabel?.fontSize)) {
        result.xAxis = result.xAxis || {};
        result.xAxis.axisLabel = result.xAxis.axisLabel || {};
        result.xAxis.axisLabel.fontSize = px(8);
    }
    if (!(options?.yAxis?.axisLabel?.fontSize)) {
        result.yAxis = result.yAxis || {};
        result.yAxis.axisLabel = result.yAxis.axisLabel || {};
        result.yAxis.axisLabel.fontSize = px(8);
    }
    return result;
};
