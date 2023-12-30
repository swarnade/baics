import React ,{useState} from 'react'

export default function TextForm_3() {
    const[text,SetText]=useState("Default Text 3");

    const onclk=()=>{
        let text_c=text.toUpperCase();
        SetText(text_c);
    }
    const onchn=(event)=>{
        SetText(event.target.value);
    }
  return (
    <div>
        <h1>{text}</h1>
      <textarea className='form-control' value={text} onChange={onchn}></textarea>
      <button onClick={onclk}>Change</button>
    </div>
  )
}
