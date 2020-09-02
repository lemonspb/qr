import React,{useState, useEffect,useCallback} from 'react';
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
          const memoizedCallback = useCallback(
            () => {
              data
            },
            [data],
          );
            const link:any = document.createElement('a');
            link.href = memoizedCallback;
            link.target = '_blank';
            link.click();
        }
        return false
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
