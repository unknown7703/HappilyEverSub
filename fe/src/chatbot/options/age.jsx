import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {userAdded} from "../redux/state";
const Age = (props) => {
    const dispatch = useDispatch()
    let [date,setDate]=useState(0);
    let allYears = [];
    for(let x = 18; x <=40; x++) {
        allYears.push(x)
    };
    
    //const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
    const handleAge =(e)=>
    {
        setDate(e.target.value);
        console.log(date);
        dispatch(
            userAdded(
                {
                    slot:" ",
                    time:" ",
                    name:"Aatreya",
                    age: 25,
                }
            )
            
        )
    };
    let navigate = useNavigate(); 
    const handleSubmit=()=>
    {
        let path=`/exit`;
        navigate(path);
    }
    return(
        <div>
            <select  class="ml-10 border-2 border-lime-900" onChange={handleAge}>
                {allYears.map((year)=>
                <option key={year} value={year}>{year}</option>)}
            </select>
            <button className="option-button" onClick={handleSubmit}>
                    Submit
            </button>
        </div>
    );

};
export default Age;