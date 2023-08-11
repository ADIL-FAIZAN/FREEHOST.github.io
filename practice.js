//alert import
import React from 'react'

export default function Alert(props) {
  return (
    <>
     <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </>
  )
}
//app.js

<Alert alert={"alert"}/>

//alert state
const[alert,setalert]=useState("null")
//showAlert function
const showAlert=(message,type)=>{

    setalert({
msg:message,
type : type
})
}