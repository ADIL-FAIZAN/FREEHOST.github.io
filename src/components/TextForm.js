
import React,{useState} from 'react'
export default function TextForm(props) {

const upclick=()=>{
let newtext=text.toUpperCase();
  setText(newtext);
  props.showAlert("Converted to Upper Case","Success");
}

const lowclick=()=>{

let newtext=text.toLowerCase();
setText(newtext);
props.showAlert("Converted to Lower Case","Success");
}

const clear=()=>{

  setText("");
}
const handleOnchange=(event)=>{

setText(event.target.value)

}

const [text,setText]=useState('ADILRAJPOOT.CO');

  return(
    <>
    <div className="container my-5" >
        <h2>{props.heading}</h2>
      <div className="form-group">
    
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnchange} rows="3"></textarea>
  </div>
  {/*<button className="button btn-primary" onClick={upclick}>Convert to upper case</button>*/}
  {/*<button className="button btn-primary ml-3" onClick={lowclick}>Convert to Lower case</button>*/}
  <button className="button btn-primary ml-3" onClick={clear}>Clear Text</button>
    </div>
  
  <div className="container my-2">

<h1>YOUR TEXT SUMMARY</h1>
<p>{text.split(" ").length}words and  {text.length} characters</p>
  </div>
  
</>  
  
  )
}
