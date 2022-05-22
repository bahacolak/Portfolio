import React from 'react';

function FormInput(props) {
  const{label, onChange, id, ...inputProps} = props;
  
  return (
    <div className="forminput">
       {/* <label>username</label> */}
       <input {...inputProps} onChange={onChange} />
    </div>
  )
}

export default FormInput