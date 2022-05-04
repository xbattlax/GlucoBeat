import "../App.css"
import "./css/Card.css"
import Card from "./components/card";

const Container = (props) => {
    return(
        <>
            <h1>{props.title}</h1>
            <Card></Card>
        </>
    );
};

export default Container;