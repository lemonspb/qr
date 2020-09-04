import React from "react";

interface QrResult {
    result: string
}


function QrResult(props: QrResult) {
    const { result } = props;

    return (
        <section className="qr-result">
            <div className='qr-result__toolbar'></div>
            <div className='qr-result__line-result'>{result}</div>
            <a href={result} target='_blank' >{result}</a>
        </section> 
    );
}

export default QrResult;
