"use client";

import React from "react";

export default function QRCodeModal({ liveUrl }) {
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(liveUrl)}`;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border text-center max-w-sm mx-auto my-8">
      <h3 className="text-xl font-bold text-stone-800 mb-2">Scan for Digital Menu</h3>
      <p className="text-xs text-stone-500 mb-4">Point your mobile camera to view our interactive menu</p>
      
      <div className="flex justify-center mb-4">
        <img
          src={qrApiUrl}
          alt="Bean & Bite Digital Menu QR Code"
          className="w-48 h-48 rounded-lg border p-2 bg-white"
        />
      </div>

      <a
        href={qrApiUrl}
        download="BeanAndBite_QRCode.png"
        className="text-xs text-amber-700 underline hover:text-amber-800 font-medium"
      >
        Download High-Res QR Code for Print
      </a>
    </div>
  );
}