import React from "react";

interface QrResult{
    result: string
}


function QrResult(props:QrResult) {
  const { result } = props;

  return (
    <section className="qr-result">
    {result}
    </section>
  );
}

export default QrResult;
