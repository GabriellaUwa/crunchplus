import React from "react";
import {VictoryPie} from "victory";
import "./RaiseChart.css"

/**
 * Discovered a brilliant chart library and  thought to include
 **/
// based on https://news.crunchbase.com/news/global-2020-funding-and-exit

const data = [{x: "Seed", y: 13}, {x: "Series A", y: 43}, {x: "Series B", y: 44}];
export default function RaiseChart() {
    return (
        <div className="element">
            <VictoryPie
                animate={true}
                data={data}
                startAngle={60}
                endAngle={600}
                innerRadius={60}
                labelRadius={({innerRadius}) => innerRadius + 12}
                colorScale={["#A961E1", "#9029F8", "#A9F"]}
                style={{labels: {fill: "white", fontSize: 20, fontWeight: "bold"}}}
            />
        </div>
    );
}
