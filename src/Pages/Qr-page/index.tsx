import React,{useState, useEffect} from 'react';
import QrReader from 'react-qr-reader'







function QrPage() {
    const [qrResult, setQrResult] = useState('')
    const [isMobile, setIsMobile] = useState(true)
    useEffect(()=>{
        if (typeof window.orientation === 'undefined') { 
            setIsMobile(false)
         }

    },[isMobile])

   const  handleScan = (data:string | null) => {
        if (data) {
     
        }
      }
    const  handleError = (err:any) => {
        console.error(err)
      }


  return (
    <div>
      {!qrResult?<>
        <h1>Отсканируйте QR код</h1>
        {isMobile?<QrReader
      delay={false}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
    />:'Зайдите с мобильного устройства'}
    </>: <div>{qrResult}</div>}
    
  </div>
  );
}

export default QrPage;
