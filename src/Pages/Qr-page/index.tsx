import React, { useState, useEffect, useRef, useDebugValue } from 'react';
import QrReader from 'react-qr-reader';

import WarningContent from '../../Components/WarningContent';
import QrResult from '../../Components/QrResult';
import Title from '../../Components/Title';

import './style.scss';

function QrPage() {
  const [qrResult, setQrResult] = useState('')
  const [isMobile, setIsMobile] = useState(true)
  const qrRef: any = useRef()

  useEffect(() => {
    if (typeof window.orientation === 'undefined') {
      setIsMobile(false)
    }
  }, [])

  const handleScan = (data: string | null) => {
    if (data) {
      setQrResult(data)
    }

  }
  const handleError = (err: any) => {

  }

  const onClearQr = () => {
    setQrResult('')
  }
 

  const openImageDialog = () => {
    qrRef.current.openImageDialog()
  }
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
    <div className='page-qr'>
            <button onClick={()=>{getUsb()}}>
          нажать
          </button>
      {!qrResult ? <>
        {isMobile && !qrResult ?
          <div className='page-qr__wrap'>
            <Title
              Tag={'h2'}
              text={'Отсканируйте QR код'}
              position={'center'}
            />
            <div className='page-qr__reader'>
              <QrReader
                ref={qrRef}
                delay={500}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
              />
            </div>
          </div>
          : <WarningContent
            content={'Зайдите с мобильного устройства или загузите фото QR кода'}
            openImageDialog={openImageDialog}
          />}
      </> : <QrResult
          onClear={onClearQr}
          result={qrResult}
          openImageDialog={openImageDialog}
        />}

      <div className='page-qr__reader'>
        {!isMobile && <QrReader
          ref={qrRef}
          delay={500}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
          legacyMode={true}

        />}
      </div>
    </div>
  );
}

export default QrPage;
