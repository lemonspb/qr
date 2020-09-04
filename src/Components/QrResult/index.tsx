import React from "react";
import Button  from '../Button'
import './style.scss'

interface QrResult {
    result: string,
    onClear: Function
}


function QrResult(props: QrResult) {
    const { result,onClear } = props;

    return (
        <section className="qr-result">
            <div className='qr-result__toolbar'><Button title='Назад'
            action={onClear}
            /></div>
            <div className='qr-result__link-line'><a href={result} target='_blank' >{result}</a></div>
            <a href={result} target='_blank' >{result}</a>
        </section> 
    );
}

export default QrResult;
