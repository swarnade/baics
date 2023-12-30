import React, {useState} from 'react'
export default function TextForm() {
const handleUpClick =()=>{
    console.log("Herllo");
    setText("You Have Clicked");
}
const handleOnChange=(event)=>{
    console.log("Hello");
    setText(event.target.value)
}
    const[text,setText]=useState('Enter Text Here');
    //setText("New text");
    return (
        <div>
            <div className="form-group">
                <h1>{text}</h1>
                <textarea value={text } className='form-control' id="myBox" rows="8" onChange={handleOnChange}></textarea>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
            </div>
        </div>
    )
}
