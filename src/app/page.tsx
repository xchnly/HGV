'use client';

import { useState } from 'react';
import PromoBanner from '@/components/PromoBanner';
import Navbar from '@/components/Navbar';
import HeroWithProducts from '@/components/HeroWithProducts';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { Product, Category } from '@/components/types';

export default function HomePage() {
  const [showPromo, setShowPromo] = useState<boolean>(true);

  // Data produk untuk section New Arrivals
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: "RP89,000.00",
      originalPrice: null,
      rating: 4.5,
      reviews: 562,
      image: "/api/placeholder/300/300",
      discount: null
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: "RP129,000.00",
      originalPrice: "RP160,000.00",
      rating: 3.5,
      reviews: 3245,
      image: "/api/placeholder/300/300",
      discount: "-20%"
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: "RP99,000.00",
      originalPrice: null,
      rating: 4.5,
      reviews: 4563,
      image: "/api/placeholder/300/300",
      discount: null
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: "RP89,000.00",
      originalPrice: "RP129,000.00",
      rating: 4.5,
      reviews: 456,
      image: "/api/placeholder/300/300",
      discount: "-30%"
    }
  ];


  // Data kategori untuk section Shop by Category
  const categories: Category[] = [
    { name: "SHIRTS", image: "/images/model-3.png" },
    { name: "DENIM", image: "/images/model-2.png" },
    { name: "TEES", image: "/images/model-4.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Promo Banner */}
      {showPromo && <PromoBanner onClose={() => setShowPromo(false)} />}
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroWithProducts products={featuredProducts} />
      
      {/* Category Section */}
      <CategorySection 
        categories={categories} 
        title="SHOP BY CATEGORY" 
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}