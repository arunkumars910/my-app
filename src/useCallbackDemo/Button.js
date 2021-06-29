import React from "react";

function Button({ handlerClick, children }) {
  console.log("Rendering Button - ", children);
  return <button onClick={handlerClick}>{children}</button>;
}

export default React.memo(Button);
