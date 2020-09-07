import React, { useState, useEffect, useRef } from 'react';
import QrReader from 'react-qr-reader';
import './style.scss';
import WarningContent from '../../Components/WarningContent'
import QrResult from '../../Components/QrResult'
import Title from '../../Components/Title'
import Message from '../../Components/Message'

function QrPage() {
  const [qrResult, setQrResult] = useState('https://cdn.cccs.edu/landing-pages/email-generation.html')
  const [isMobile, setIsMobile] = useState(true)
  const [errorMessage, setErrorMessage] = useState(false)
  const qrRef:any = useRef()

  useEffect(() => {
    if (typeof window.orientation === 'undefined') {
      setIsMobile(false)
    }

    setTimeout(() => {
      setErrorMessage(false)
    }, 5000)
  }, [errorMessage])

  const handleScan = (data: string | null) => {
    if (data) {
      console.log('wfksdfopsdkfl;sdkf;ldkfl;')
      setQrResult(data)
    }
    else{
      setErrorMessage(true)
    }
  }
  const handleError = (err: any) => {
    console.log(err)
  }

  const onClearQr = () => {
        setQrResult('')
  } 
  const onImageLoad = (event:React.SyntheticEvent<HTMLImageElement>) => {
    console.log(event)
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
            <QrReader
              delay={1000}
              onError={handleError}
              onImageLoad={onImageLoad}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
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
        {!isMobile  &&    <QrReader
              ref={qrRef}
              delay={1000}
              onError={handleError}
              onImageLoad={onImageLoad}
              onScan={handleScan}
              style={{ width: '100%' }}
              legacyMode

            />}
          { errorMessage &&  <Message  text='Невозможно считать QR код'
             />}
    </div>
  );
}

export default QrPage;
