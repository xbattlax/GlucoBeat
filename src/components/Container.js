import "../App.css"
import Card from "./Card";

const Container = (props) => {
    return(
        <>
            <h3>{props.title}</h3>
            <Card
                img={props.img}
                color={props.color}
                chiffre={props.chiffre}
                src={props.src}
                alt={props.alt}
                txt={props.txt}
            ></Card>
        </>
    );
};

export default Container;