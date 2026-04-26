"use client";
import { useState, useRef, useCallback } from "react";
import { Button, Input } from "@/components/ui";
import { ReactQRCode, ReactQRCodeRef } from "@lglab/react-qr-code";
import { toast } from "sonner";

export default function Home() {
  const [link, setLink] = useState("");
  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef<ReactQRCodeRef>(null);

  const isValidInput = link.trim().length > 0;

  const handleDownload = useCallback(() => {
    if (!qrRef.current || !qrValue) {
      toast.error("Generate a QR code first!");
      return;
    }

    const filenameBase = qrValue.trim().slice(0, 30).replace(/[^\w-]+/g, "-") || "qr-code";

    qrRef.current.download({
      name: `qrtea-${filenameBase}`,
      format: "png",
      size: 1000,
    });
    toast.success("QR code downloaded!");
  }, [qrValue]);

  const generateQRCode = useCallback(() => {
    const trimmed = link.trim();
    if (!trimmed) {
      toast.error("Please enter a link or text");
      return;
    }
    setQrValue(trimmed);
    toast.success("QR Code generated successfully!");
  }, [link]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        generateQRCode();
      }
    },
    [generateQRCode],
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-[url('/@QRtea.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-black/30 w-screen h-screen" />
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-modak text-white drop-shadow-lg">
            Welcome to QRtea
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-200">
            Generate beautiful QR codes instantly just for CE Isheri
          </p>
        </div>
        <div className="w-full max-w-md flex flex-col items-center gap-4 sm:gap-5">
          <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white/10 border border-white/20 transition-all duration-300 focus-within:border-[#8B4513] focus-within:ring-2 focus-within:ring-[#8B4513]/30">
            <Input
              className="w-full bg-none text-white placeholder:text-gray-300 px-4 py-3 sm:px-5 sm:py-4 md:p-5 text-base sm:text-lg focus:outline-none border-none"
              type="text"
              placeholder="Enter URL or text..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button
            className="w-full bg-[#8B4513] hover:bg-[#A0522D] active:bg-[#6B3410] text-white text-lg sm:text-xl md:text-2xl px-6 py-3 sm:px-8 sm:py-4 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            onClick={generateQRCode}
            disabled={!isValidInput}
          >
            Generate QR Code
          </Button>
        </div>
        {qrValue && (
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Your QR Code
            </h3>

            {/* QR Code Container with responsive sizing */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border-4 border-[#8B4513]/20">
              <ReactQRCode
                ref={qrRef}
                value={qrValue} // Use the state that only updates on "Generate"
                size={250}
                marginSize={2}
                
                imageSettings={{
                  src: "/logo-church.png",
                  width: 50, // Slightly smaller (20% of total size) is safer
                  height: 50,
                  excavate: true, // This cuts out the pixels behind the logo so they don't bleed through
                }}
                
              />
            </div>

            {/* Download Button */}
            <div className="flex flex-col items-center gap-2 mt-2">
              <p className="text-xs sm:text-sm text-gray-200 text-center">
                Download your QR code as a high-quality image
              </p>
              <Button
                className="bg-[#8B4513] hover:bg-[#A0522D] active:bg-[#6B3410] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={handleDownload}
                disabled={!qrValue}
              >
                Download QR Code
              </Button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-300">
            © {new Date().getFullYear()} QRtea. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
