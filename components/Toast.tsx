
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
      className={`fixed bottom-5 right-5 bg-tactical-accent text-tactical-900 px-6 py-4 rounded shadow-2xl transform transition-transform duration-300 z-50 flex items-center gap-3 font-bold border border-emerald-400 ${
        isVisible ? 'translate-y-0' : 'translate-y-32'
      }`}
    >
      <i className="fa-solid fa-check-circle text-tactical-900 text-xl"></i>
      <div>
        <span className="block text-[10px] uppercase opacity-70 tracking-widest">Status Update</span>
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
};
