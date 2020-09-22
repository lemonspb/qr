import React, { useState, useEffect, useRef } from 'react';
import QrReader from 'react-qr-reader';

import WarningContent from '../../Components/WarningContent';
import QrResult from '../../Components/QrResult';
import Title from '../../Components/Title';
import Message from '../../Components/Message';

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
  const onImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
  }

  const openImageDialog = () => {
    qrRef.current.openImageDialog()
  }


  return (
    <div className='page-qr'>
      {!qrResult ? <>
        {isMobile ?
          <div className='page-qr__wrap'>
            <Title
              Tag={'h2'}
              text={'Отсканируйте QR код'}
              position={'center'}
            />
            <div className='page-qr__reader-wrap'>
            <QrReader
              delay={1000}
              onError={handleError}
              onImageLoad={onImageLoad}
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
        <div className='page-qr__reader-wrap'>
      {!isMobile && <QrReader
        ref={qrRef}
        delay={1000}
        onError={handleError}
        onImageLoad={onImageLoad}
        onScan={handleScan}
        style={{ width: '100%' }}
        legacyMode

      />}
      </div>
      {/* <Message text='Невозможно считать QR код'
        showMessage={errorMessage}
        setMessage={setErrorMessage}
      />} */}
    </div>
  );
}

export default QrPage;
