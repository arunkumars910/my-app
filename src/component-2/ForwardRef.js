import React from "react";

//React.forwardRef() takes its component as a parameter
// when component using forwardRef it will recieves ref as a second parameter
// Ref is forwarded from parent to native input handler
const ForwardRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <h1>Forwarding Refrence</h1>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardRef;
