import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  fullWidth?: boolean;
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar 1ª Consulta Gratuita", 
  subtext = "Resposta rápida • Sem compromisso", 
  className = "",
  fullWidth = true,
  variant = 'primary'
}) => {
  const baseClasses = "group relative flex flex-col items-center justify-center py-4 px-6 rounded-xl transition-all duration-300 font-bold tracking-wide transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-brand-green text-brand-dark shadow-[0_0_20px_rgba(0,217,95,0.4)] hover:shadow-[0_0_30px_rgba(0,217,95,0.6)]",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green/10"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}
    >
      <div className="flex items-center gap-2 text-lg uppercase">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span>{text}</span>
      </div>
      {subtext && (
        <span className={`text-xs mt-1 font-medium opacity-90 ${variant === 'outline' ? 'text-white/70' : 'text-brand-dark/80'}`}>
          {subtext}
        </span>
      )}
    </a>
  );
};