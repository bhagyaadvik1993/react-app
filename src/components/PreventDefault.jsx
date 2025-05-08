import React from 'react'

function PreventDefault() {
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent form from submitting
        console.log('submission of form is prohibitted');
    };
  return (
    
    <from onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
    </from>
  )
}

export default PreventDefault