import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import "./barChartBox.scss"
// import { Link } from "react-router-dom"

type Props = {
    title: string; 
    color: string;
    datakey: string;
    chartData: object[];
}

const BarChartBox = (props:Props) => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <span>{props.title}</span>
                </div>
            </div>
            <div className="chartInfo">
                <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart data={props.chartData}>
                        <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                                labelStyle={{ display: "none" }}
                                cursor={{fill:"none"}}/>
                        <Bar dataKey={props.datakey} fill={props.color}/>
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default BarChartBox