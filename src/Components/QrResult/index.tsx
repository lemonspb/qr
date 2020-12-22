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

    const getUsb  = () =>{
        async () => {
          let devices = await navigator.usb.getDevices();
          devices.forEach(device => {
            // Add |device| to the UI.
            console.log(device);
          });
      }
      }
      


    return (
        <section className="qr-result">
            <div className='qr-result__toolbar'><Button title='Назад'
                action={onClear}
            />

                <Button title='Загрузить фото'
                    action={openImageDialog}
                />
                   <Button title='нажать'
                    action={getUsb}
                />
       
            </div>
            <div className='qr-result__link-line'>URL: <a href={result} target='_blank' title='Открыть'  rel="noopener noreferrer">{result}</a></div>
            <div className='qr-result__content'>
                <ButtonBrowserLink
                    link={result}
                />
            </div>
        </section>
    );
}

export default QrResult;
