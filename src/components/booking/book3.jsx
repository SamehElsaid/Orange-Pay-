import React, { useRef } from 'react';
import QRCode from 'qrcode.react'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';
const FinalBook = () => {
    // const [showQRCode, setShowQRCode] = useState(false);

    const qrCodeRef = useRef(null);
    const imageSrc = 'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg';
    const handleDownloadQRCode = () => {
        // Capture the QR code and other components as an image using html2canvas
        html2canvas(qrCodeRef.current).then((canvas) => {
          const qrImage = canvas.toDataURL('image/png');
          
          // Create a new jsPDF instance
          const pdf = new jsPDF();
    
          // Add the QR code image to the PDF
          pdf.addImage(qrImage, 'PNG', 10, 50, 190, 100);          
          // Save the PDF
          pdf.save('qr_code.pdf');
        });
      };
   
        return (
            <div>
                   <div className="slider-text  ">
        <h1 className="slider-title mt-5 paytext">Classic Program</h1>
      </div>
      <div className="reservation-banner mb-4">
      <div className="slider-overrlay-res" ></div>
      <img src="dining.png" className='bbb' alt="" />
      </div>
            <div className="container">
            <div className="row">
        <div className="col-md-12 text-center mb-4">
          <img src="pay3.png" alt="Top Image" className="top-image" />
        </div>
      </div>
              <div className="text-center mt-5">
              <div ref={qrCodeRef}>
          <QRCode value={imageSrc} size={200} />
        </div>
              </div>
              <div className="text-center mt-4">
                <img src="reset2.png" alt="Image" className="img-fluid" />
              </div>
              <div className="row mt-4">
               <div className='col-md-7  float-left ml-5'>
                <Link to="/" >
                <button    className ="returnn " >
                  <strong> Return Home</strong>
                </button>
                </Link>
                </div>
                <div className='col-md-4 text-center '>
                <button className="btn btn-orange " onClick={handleDownloadQRCode}>
                  Print QR Code
                </button>
                </div>
     
              </div>
             
            </div>
            </div>
          );
}
export default FinalBook ; 