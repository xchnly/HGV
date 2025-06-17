'use client';

import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string | null;
  rating: number;
  reviews: number;
  image: string;
  discount: string | null;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
            {product.discount}
          </div>
        )}
      </div>
      
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          {renderStars(product.rating)}
        </div>
        <span className="text-gray-500 text-sm ml-2">{product.rating}/5</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold">{product.price}</span>
        {product.originalPrice && (
          <span className="text-gray-500 line-through">{product.originalPrice}</span>
        )}
      </div>
    </div>
  );
}