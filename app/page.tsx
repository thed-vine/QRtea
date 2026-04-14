"use client";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [link, setLink] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = () => {
    setQrCode(link);
    alert("QR Code generated successfully!");
  };

  return (
    <>
      <main>
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to QRtea</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate QR Code</button>
        </div>
        {qrCode && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Your QR Code:</h3>
            <QRCode value={qrCode} size={200} />
          </div>
        )}
      </main>
    </>
  );
}
