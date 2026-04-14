import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to QRtea</h2>
        </div>
        <div>
          <input type="text" placeholder="Enter the link" />
          <button>Generate QR Code</button>
        </div>
      </main>
    </>
  );
}
