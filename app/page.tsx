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
    if (!qrRef.current) {
      toast.error("Generate a QR code first!");
      return;
    }

    qrRef.current.download({
      name: `qrtea-${Date.now()}`,
      format: 'png',
      size: 1000,
    });
    toast.success("QR code downloaded!");
  }, []);

  const generateQRCode = useCallback(() => {
    if (!isValidInput) {
      toast.error("Please enter a link or text");
      return;
    }
    setQrValue(link);
    toast.success("QR Code generated successfully!");
  }, [link, isValidInput]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      generateQRCode();
    }
  }, [generateQRCode]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-[url('/@QRtea.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-modak text-white drop-shadow-lg">
            Welcome to QRtea
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-200">
            Generate beautiful QR codes instantly
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-md flex flex-col items-center gap-4 sm:gap-5">
          <div className="w-full liquid-glass rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300">
            <Input
              className="w-full bg-transparent text-white placeholder:text-gray-300 px-4 py-3 sm:px-5 sm:py-4 md:p-5 text-base sm:text-lg focus:outline-none border-none"
              type="text"
              placeholder="Enter URL or text..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button
            className="w-full liquid-glass-button text-white text-lg sm:text-xl md:text-2xl px-6 py-3 sm:px-8 sm:py-4 md:p-6 rounded-xl sm:rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={generateQRCode}
            disabled={!isValidInput}
          >
            Generate QR Code
          </Button>
        </div>

        {/* QR Code Display */}
        {qrValue && (
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Your QR Code
            </h3>
            
            {/* QR Code Container with responsive sizing */}
            <div className="liquid-glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                <ReactQRCode
                  ref={qrRef}
                  value={qrValue}
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
                    style: 'rounded',
                    color: "#ffffff",
                  }}
                  finderPatternInnerSettings={{
                    style: "rounded",
                    color: "#003262",
                  }}
                />
              </div>
            </div>

            {/* Download Button */}
            <div className="flex flex-col items-center gap-2 mt-2">
              <p className="text-xs sm:text-sm text-gray-200 text-center">
                Download your QR code as a high-quality image
              </p>
              <Button
                className="liquid-glass text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white/20 active:bg-white/30 hover:scale-105"
                onClick={handleDownload}
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
