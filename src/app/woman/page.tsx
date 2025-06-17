'use client';

import { useState } from 'react';
import PromoBanner from '@/components/PromoBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroWithProducts';
import NewArrivalsSection from '@/components/NewArrivalsSection';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { Product, Category } from '@/components/types';

export default function WomenPage() {
  const [showPromo, setShowPromo] = useState<boolean>(true);

  const newArrivals: Product[] = [
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
    // ... other products
  ];

  const categories: Category[] = [
    { name: "SHIRTS", image: "/api/placeholder/400/300" },
    { name: "DENIM", image: "/api/placeholder/400/300" },
    { name: "TEES", image: "/api/placeholder/400/300" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {showPromo && <PromoBanner onClose={() => setShowPromo(false)} />}
      <Navbar activeCategory="women" />
      <HeroSection />
      <NewArrivalsSection products={newArrivals} />
      <CategorySection categories={categories} />
      <Footer />
    </div>
  );
}