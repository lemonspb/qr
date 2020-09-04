import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import './style.scss';
import WarningContent from '../../Components/WarningContent'
import QrResult from '../../Components/QrResult'
import Title from '../../Components/Title'


function QrPage() {
  const [qrResult, setQrResult] = useState('')
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    if (typeof window.orientation === 'undefined') {
      setIsMobile(false)
    }

  }, [isMobile])

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
              onScan={handleScan}
              style={{ width: '100%' }}
              legacyMode={false}
            />
          </div>
          : <WarningContent
            content={'Зайдите с мобильного устройства'}
          />}
      </> : <QrResult
          onClear={onClearQr}
          result={qrResult}
        />}

    </div>
  );
}

export default QrPage;
