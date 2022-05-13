import "../App.css"
import "./css/card.css"
import { LineChart, Line, Legend, Tooltip, XAxis } from 'recharts';

const GrapheGlucose = (props) => {

    return(
        <div className="card" style={{backgroundColor: props.color}}>
            <div className="cardText">
                <LineChart width={400} height={400} data={props.data}>
                    <XAxis dataKey="name" />
                    <Legend />
                    <Tooltip content={<CustomTooltip/>}/>
                    <Line type="monotone" dataKey="taux" label="name" stroke="#8884d8" />
                </LineChart>
            </div>
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
