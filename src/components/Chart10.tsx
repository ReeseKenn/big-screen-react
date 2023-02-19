import React from 'react';

export const Chart10 = () => {
    return (
        <div className="cardGroup">
            <div className="card other-bordered">
                <div className="cardTitle">成交额</div>
                <div className="cardNumber">
                    <div className="number">$4394.88</div>
                    <div className="per decrease">12%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">订单量</div>
                <div className="cardNumber">
                    <div className="number">464</div>
                    <div className="per increase">5%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">客单价</div>
                <div className="cardNumber">
                    <div className="number">$60.94</div>
                    <div className="per decrease">7%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">预估毛利率</div>
                <div className="cardNumber">
                    <div className="number">53.15%</div>
                    <div className="per decrease">3%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">营销花费</div>
                <div className="cardNumber">
                    <div className="number">￥7592.69</div>
                    <div className="per decrease">11%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">投入产出比</div>
                <div className="cardNumber">
                    <div className="number">3.72</div>
                    <div className="per increase">6.5%</div>
                </div>
            </div>
        </div>
    );
};
