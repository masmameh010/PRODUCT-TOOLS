
import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onHide }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <div
      className={`fixed bottom-5 right-5 bg-[#f97316] text-white px-6 py-4 rounded shadow-2xl transform transition-transform duration-300 z-50 flex items-center gap-3 font-bold border border-orange-400 ${
        isVisible ? 'translate-y-0' : 'translate-y-32'
      }`}
    >
      <i className="fa-solid fa-check-circle text-white text-xl"></i>
      <div>
        <span className="block text-xs uppercase opacity-80">System Message</span>
        <span>{message}</span>
      </div>
    </div>
  );
};
