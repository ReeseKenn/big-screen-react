import React from 'react';
import {Title} from "./title";

export const Chart8 = () => {
    return (
        <section className="bordered section8">
            <Title title="供应商排名"/>
            <div className="chart">
                <div className="line"/>
                <table>
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>供应商名称</th>
                        <th>评分</th>
                        <th>合作次数</th>
                    </tr>
                    </thead>
                </table>
                <div className="line"/>
                <table>
                    <tbody>
                    <tr>
                        <td>01</td>
                        <td>HaHaCats原创宠物家具</td>
                        <td>4.9</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>东莞市盛大电子科技公司</td>
                        <td>4.7</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>永康市超威五金制品厂</td>
                        <td>4.5</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>迷尚宠物用品有限公司</td>
                        <td>4.2</td>
                        <td>12</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
