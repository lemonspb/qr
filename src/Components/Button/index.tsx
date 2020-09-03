import React from "react";
interface QrResult{
    result: string
}


function Button(props:QrResult) {
  const { result } = props;

  return (
    <button className="warning">
    
    </button>
  );
}

export default QrResult;
