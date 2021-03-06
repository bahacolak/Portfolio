import React, { useState } from 'react';

function FormInput(props) {
  
  
  
  const [focused, setFocused] = useState(false)
  const{label, errorMessage, onChange, id, ...inputProps} = props;
  
  const handleFocus = (e) => {
    setFocused(true);
  };
  
  return (
    <div className="forminput">
       <label>{label}</label>
       <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
       <span className="error-message">{errorMessage}</span>
    </div>
  )
}

export default FormInput