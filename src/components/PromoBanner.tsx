'use client';

import { X } from 'lucide-react';

interface PromoBannerProps {
  onClose: () => void;
}

export default function PromoBanner({ onClose }: PromoBannerProps) {
  return (
    <div className="bg-black text-white text-center py-2 px-4 relative">
      <span className="text-sm">Sign up and get 20% off to your first order. </span>
      <button className="underline text-sm">Sign Up Now</button>
      <button 
        onClick={onClose}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}