import React,{useState, useEffect} from 'react';
import QrReader from 'react-qr-reader'







function QrPage() {

    const [result, setResult] = useState('')
    const [isMobile, setIsMobile] = useState(true)
    useEffect(()=>{
        if (typeof window.orientation === 'undefined') { 
            setIsMobile(false)
         }

    },[isMobile])

   const  handleScan = (data:string | null) => {
        if (data) {
            setResult(data)
            const w = window.open(data);
             w?.document.close();
        }
      }
    const  handleError = (err:any) => {
        console.error(err)
      }


  return (
    <div>
        <h1>Отсканируйте QR код</h1>
        {isMobile?<QrReader
      delay={2000}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
    />:'Зайдите с мобильного устройства'}
    <div>{result}</div>
  </div>
  );
}

export default QrPage;
