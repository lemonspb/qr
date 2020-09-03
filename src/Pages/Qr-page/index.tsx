import React,{useState, useEffect} from 'react';
import QrReader from 'react-qr-reader'







function QrPage() {

    const [isMobile, setIsMobile] = useState(true)
    useEffect(()=>{
        if (typeof window.orientation === 'undefined') { 
            setIsMobile(false)
         }

    },[isMobile])

   const  handleScan = (data:string | null) => {
        if (data) {
            const link = document.createElement('a');
            link.href = data;
            link.target = '_blank';
            link.click();
        }
      }
    const  handleError = (err:any) => {
        console.error(err)
      }


  return (
    <div>
        <h1>Отсканируйте QR код</h1>
        {isMobile?<QrReader
      delay={false}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
    />:'Зайдите с мобильного устройства'}
  </div>
  );
}

export default QrPage;
