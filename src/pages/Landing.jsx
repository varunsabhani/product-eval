import React, { useState } from 'react'
import AutoTyping from './AutoTyping'
import FormComponent from './FormComponent'
import './Landing.css';


const Landing = () => {
  
  const [autoType, setautoType] = useState([])  
  return (  
    <div className="landing-page">
      
        {
          (autoType) ? <div className="panelLeft"> <AutoTyping />  </div> : ""
        
     
        }
      
      <div className="panelRight">
        <FormComponent  />
      </div>
    </div>
  )
}

export default Landing