import React from "react";
import Barcode from "react-barcode";

interface BarcodeComponentProps {
  value: string;
}

const BarcodeComponent: React.FC<BarcodeComponentProps> = ({ value }) => {
  return (
    <Barcode background="none" lineColor="white" value={value} ean128={true} 
    height={300} fontSize={30}/>
  );
};

export default BarcodeComponent;
