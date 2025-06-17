'use client';

import { Product } from './types';
import ProductCard from './ProductCard';

interface HeroWithProductsProps {
  products: Product[];
}

export default function HeroWithProducts({ products }: HeroWithProductsProps) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gray-100 pt-16 pb-80 lg:pb-96"> {/* Tinggi diperbesar untuk overlap */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Konten Teks */}
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
                FIND CLOTHES<br />
                THAT MATCHES<br />
                YOUR STYLE
              </h1>
              <p className="text-gray-600 mb-8 max-w-md">
                Browse through our diverse range of meticulously crafted garments, 
                designed to bring out your individuality and cater to your sense of style.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
              
              <div className="flex space-x-8 mt-12">
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-gray-600 text-sm">International Brands</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2,000+</div>
                  <div className="text-gray-600 text-sm">High-Quality Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">30,000+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Gambar Model */}
            <div className="relative w-full h-full z-50 pointer-events-none"> {/* Tambahkan z-50 */}
              <div className="absolute -bottom-48 lg:-bottom-64 right-0 w-full max-w-2xl">
                <img 
                  src="/images/model.png" 
                  alt="Fashion Model"
                  className="w-full h-auto object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid yang Overlap */}
      <div className="relative z-0 -mt-48 lg:-mt-64 px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-white pt-16 pb-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">NEWS ARRIVALS PRODUCTS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}