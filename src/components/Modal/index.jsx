"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full min-w-2xl max-w-lg p-9 relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[20px] font-semibold   text-gray-800">{title}</h2>
          <button
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
