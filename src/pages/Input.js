import React,{useState} from "react";

const Input = () => {
    const [txtValue,setTxtValue] = useState(''); 

    const changeText = (e) => {
        setTxtValue(e.target.value)
    };

    return (
        <div>
           <input type="text" value={txtValue} onChange={changeText}></input>
           <br></br>
           <p>{txtValue}</p>
        </div>
    )
}

export default Input;