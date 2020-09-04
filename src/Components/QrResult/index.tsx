import React from "react";
import Button  from '../Button'
import './style.scss'
import ButtonBrowserLink from '../ButtonOpenLink'

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
            <div className='qr-result__link-line'>URL: <a href={result} target='_blank' title='Открыть' >{result}</a></div>
                <ButtonBrowserLink 
                link={result}
                />
        </section>
    );
}

export default QrResult;
