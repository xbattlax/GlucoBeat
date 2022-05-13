import "../App.css"
import "./css/grapheGlucose.css"
import { LineChart, Line, Legend, Tooltip, XAxis,CartesianGrid, ResponsiveContainer, YAxis } from 'recharts';

const GrapheGlucose = (props) => {

    return(
        <div className="card" style={{backgroundColor: props.color}}>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart className="graphe" data={props.data}>
                    <CartesianGrid  horizontal="true" vertical=""/>
                    <YAxis dataKey="taux" tick={{fill: "#fff"}} ></YAxis>
                    <Legend />
                    <Tooltip content={<CustomTooltip/>}/>
                    <Line type="monotone" dataKey="taux" label="name" stroke="#fff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="intro">{payload[0].value}</p>
                <p className="label">{`${label}`}</p>
            </div>
        );
    }

    return null;
};

export default GrapheGlucose;
