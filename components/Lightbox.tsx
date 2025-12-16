import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, imageSrc, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 p-2 rounded-full"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <img 
        src={imageSrc} 
        alt="Resultado Ampliado" 
        className="max-h-[85vh] max-w-full rounded-lg shadow-2xl object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};