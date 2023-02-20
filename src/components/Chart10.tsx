import React from 'react';
import CountUp from "react-countup";

export const Chart10 = () => {
    return (
        <div className="cardGroup">
            <div className="card other-bordered">
                <div className="cardTitle">成交额</div>
                <div className="cardNumber">
                    <CountUp
                        className="number"
                        start={0}
                        end={4394.88}
                        duration={10}
                        decimals={2}
                        prefix="$"
                    />
                    <div className="per decrease">12%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">订单量</div>
                <div className="cardNumber">
                    <CountUp
                        className="number"
                        start={0}
                        end={464}
                        duration={10}
                        decimals={0}
                    />
                    <div className="per increase">5%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">客单价</div>
                <div className="cardNumber">
                    <CountUp
                        className="number"
                        start={0}
                        end={60.94}
                        duration={10}
                        decimals={2}
                        prefix="$"
                    />
                    <div className="per decrease">7%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">预估毛利率</div>
                <div className="cardNumber">
                    <CountUp
                        className="number"
                        start={0}
                        end={53.15}
                        duration={10}
                        decimals={2}
                        suffix="%"
                    />
                    <div className="per decrease">3%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">营销花费</div>
                <div className="cardNumber">
                    <CountUp
                        className="number"
                        start={0}
                        end={7592.69}
                        duration={10}
                        decimals={2}
                        prefix="$"
                    />
                    <div className="per decrease">11%</div>
                </div>
            </div>
            <div className="card other-bordered">
                <div className="cardTitle">投入产出比</div>
                <div className="cardNumber">
                    <CountUp
                        className="number"
                        start={0}
                        end={3.72}
                        duration={10}
                        decimals={2}
                    />
                    <div className="per increase">6.5%</div>
                </div>
            </div>
        </div>
    );
};
