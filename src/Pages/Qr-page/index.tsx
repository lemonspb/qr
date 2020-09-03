import React,{useState, useEffect} from 'react';
import QrReader from 'react-qr-reader';
import './style.scss';
import WarningContent from '../../Components/WarningContent'
import QrResult from '../../Components/QrResult'
import Title from '../../Components/Title'


function QrPage() {
    const [qrResult, setQrResult] = useState('')
    const [isMobile, setIsMobile] = useState(true)
    useEffect(()=>{
        if (typeof window.orientation === 'undefined') { 
            setIsMobile(true)
         }

    },[isMobile])

   const  handleScan = (data:string | null) => {
        if (data) {
          setQrResult(data)
        }
      }
    const  handleError = (err:any) => {
        console.error(err)
      }


  return (
    <div>
      {!qrResult?<>
        {isMobile?
        <>
        <Title 
        Tag={'h2'}
        text={'Отсканируйте qr код'}
        />
        <QrReader
      delay={1000}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
    />
    </>
    :<WarningContent 
          content={'Зайдите с мобильного устройства'}
    />}
    </>: <QrResult 
          result={qrResult}
    />}
    
  </div>
  );
}

export default QrPage;
