import React,{useState} from 'react';
import QrReader from 'react-qr-reader'







function QrPage() {

    const [result, setResult] = useState()

   const  handleScan = (data:any) => {
        if (data) {
            console.log(data)
        }
      }
    const  handleError = (err:any) => {
        console.error(err)
      }


  return (
    <div>
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
    />
    <div>dsfsdfsd</div>
  </div>
  );
}

export default QrPage;
