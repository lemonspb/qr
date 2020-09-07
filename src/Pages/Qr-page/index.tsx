import React, { useState, useEffect, useRef } from 'react';
import QrReader from 'react-qr-reader';
import './style.scss';
import WarningContent from '../../Components/WarningContent'
import QrResult from '../../Components/QrResult'
import Title from '../../Components/Title'


function QrPage() {
  const [qrResult, setQrResult] = useState('https://cdn.cccs.edu/landing-pages/email-generation.html')
  const [isMobile, setIsMobile] = useState(true)
  const qrRef:any = useRef()

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
    console.error(err)
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
            content={'Зайдите с мобильного устройства'}
          />}
      </> : <QrResult
          onClear={onClearQr}
          result={qrResult}
          openImageDialog={openImageDialog}
        />}
        {qrResult  &&    <QrReader
              ref={qrRef}
              delay={1000}
              onError={handleError}
              onImageLoad={onImageLoad}
              onScan={handleScan}
              style={{ width: '100%' }}
              legacyMode

            />}
    </div>
  );
}

export default QrPage;
