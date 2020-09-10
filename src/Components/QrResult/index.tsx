import React from "react";

import Button from '../Button';
import ButtonBrowserLink from '../ButtonOpenLink';

import './style.scss';

interface QrResult {
    result: string,
    onClear: Function,
    openImageDialog: Function
}


function QrResult(props: QrResult) {
    const { result, onClear, openImageDialog } = props;

    return (
        <section className="qr-result">
            <div className='qr-result__toolbar'><Button title='Назад'
                action={onClear}
            />

                <Button title='Загрузить фото'
                    action={openImageDialog}
                />
            </div>
            <div className='qr-result__link-line'>URL: <a href={result} target='_blank' title='Открыть' >{result}</a></div>
            <div className='qr-result__content'>
                <ButtonBrowserLink
                    link={result}
                />
            </div>
        </section>
    );
}

export default QrResult;
