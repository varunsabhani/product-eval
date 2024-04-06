import React from 'react'
import AutoTyping from './AutoTyping'
import FormComponent from './FormComponent'
import './Landing.css';

const Landing = () => {

  return (
    <div className="landing-page">
      <div className="panelLeft">
        <AutoTyping />
      </div>
      <div className="panelRight">
        <FormComponent />
      </div>
    </div>
  )
}

export default Landing