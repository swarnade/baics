import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm_2(props) {
const OnClickHandle=(event)=>{
    SetText(event.target.value)
}
const OnClk =()=>{
    SetText(text.toUpperCase());
}
const [text,SetText]=useState('Enter Default State');
  return (
    <div>
        <h1>{text}</h1>
        <div className='container-fluid'>
      <textarea value={text} onChange={OnClickHandle} rows="8" style={{backgroundColor:props.mode==='light'?'black':'white',color:props.mode=== 'light'?'white':'black'}}></textarea>
      </div>
      <button className='btn btn-primary' onClick={OnClk}>{props.mode} </button>

      <p>Total Number Of Charecter's  is {text.length} And {text.split(" ").length} & {text.split(" ").length*0.008}</p>
    </div>
  )
}
