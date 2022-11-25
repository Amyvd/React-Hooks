import {useState, useEffect} from "react";
import "./Item.css";

const Item = (props) =>{
    const [done,setDone] = useState(props.done);
    const [className, setClassName] = useState("todo__item");

    useEffect (() => {
        if(done === true){
            setClassName ("todo__item todo__item--done");
        }else{
            setClassName ("todo__item ");
        }
    }, [done]);

    const onItemClick = () =>{
        setDone(!done);
    }

    return(
        <li onClick={onItemClick} className={className}>{props.name} </li>
     )
       
}

export default Item;