import React from 'react';

export const Chart5 = () => {
    // @ts-ignore
    return (
        <div className="chart5">
            {/*<div>成交量Top10</div>*/}
            <div className="item">
                <div className="itemText">
                    <div className="shopName">the-rose-toy-offcial</div>
                    <div className="number">8773.06</div>
                </div>
                <div className="bar" style={{'--precent': 93}}/>
            </div>
            <div className="item">
                <div className="itemText">
                    <div className="shopName">dream-dressy</div>
                    <div className="number">7638.21</div>
                </div>
                <div className="bar" style={{'--precent': 82}}/>
            </div>
            <div className="item">
                <div className="itemText">
                    <div className="shopName">pp-cat-happy</div>
                    <div className="number">6723.92</div>
                </div>
                <div className="bar" style={{'--precent': 72}}/>
            </div>
            <div className="item">
                <div className="itemText">
                    <div className="shopName">the-ca-top-offcial</div>
                    <div className="number">6723.88</div>
                </div>
                <div className="bar" style={{'--precent': 72}}/>
            </div>
        </div>
    );
};
