import React from 'react';

function FormInput(props) {
  return (
    <div className="forminput">
       {/* <label>username</label> */}
       <input ref={props.refer} placeholder={props.placeholder} />
    </div>
  )
}

export default FormInput