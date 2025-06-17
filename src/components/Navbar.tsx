'use client';

import { Search, User, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  activeCategory?: 'women' | 'man' | 'about';
}

export default function Navbar({ activeCategory = 'man' }: NavbarProps) {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#" className={`text-gray-700 hover:text-black ${activeCategory === 'women' ? 'border-b-2 border-black pb-1' : ''}`}>Women</a>
              <a href="#" className={`text-gray-700 hover:text-black ${activeCategory === 'man' ? 'border-b-2 border-black pb-1' : ''}`}>Man</a>
              <a href="#" className={`text-gray-700 hover:text-black ${activeCategory === 'about' ? 'border-b-2 border-black pb-1' : ''}`}>About</a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-bold">HGV</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-700" />
            <User className="w-5 h-5 text-gray-700" />
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        <div className="flex justify-center space-x-8 pb-4">
          <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
          <a href="#" className="text-gray-700 hover:text-black">Best-Sellers</a>
          <a href="#" className="text-gray-700 hover:text-black">Clothing</a>
          <a href="#" className="text-red-500 hover:text-red-600">Sale</a>
        </div>
      </div>
    </nav>
  );
}