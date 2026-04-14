"use client";
import React, { useState } from "react";
import { Button, Input } from "@/components/ui";
import {ReactQRCode, ReactQRCodeRef} from "@lglab/react-qr-code";
import { toast } from "sonner";
import { useRef } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [qrCode, setQrCode] = useState("");
  const ref = useRef<ReactQRCodeRef>(null);


  const handleDownload = () => {
    ref.current?.download({
      name: 'download-demo',
      format: 'png',
      size: 1000,
    })
  };

  const generateQRCode = () => {
    setQrCode(link);
    toast.success("QR Code generated successfully!")
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[url('/@QRtea.png')] bg-cover">
        <div>
          <h2 className="text-7xl font-modak mb-4 text-white">Welcome to QRtea</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Input
            className="bg-transparent shadow-liquid text-white placeholder:text-gray-500 p-5 rounded-md w-lg focus:ring-1 focus:ring-[#8B4513] focus:outline-none "
            type="text"
            placeholder="Enter the link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-white text-2xl p-6 rounded-2xl" onClick={generateQRCode}>
            Generate QR Code
          </Button>
        </div>
        {qrCode && (
          <div className="mt-4 flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold mb-2 text-white">Your QR Code:</h3>
            <ReactQRCode 
              value={link}
              dataModulesSettings={{
                color: "#003262"
              }} 
              size={400} 
              imageSettings={{
                src: '/logo-church.png',
                width: 60,
                height: 60,
                x: undefined,
                y: undefined,
                excavate: true,
                opacity: 1,
              }} 
              finderPatternOuterSettings={{
                style :'rounded',
                color : "#ffffff",
              }}
              finderPatternInnerSettings={{
                style : "rounded",
                color : "#003262",
              }}  
            />
          </div>
        )}
        <div className="flex flex-col items-center mt-4">
          <p className="text-sm text-gray-300 mt-8">Download your QR code as an image.</p>
          <Button
            className="bg-[#8B4513] hover:bg-[#A0522D] text-white mt-2"
            onClick={handleDownload}
          >
            Download QR Code
          </Button>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-300">© 2024 QRtea. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}
