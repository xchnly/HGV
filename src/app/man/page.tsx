'use client';

import { useState } from 'react';
import PromoBanner from '@/components/PromoBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroWithProducts';
import NewArrivalsSection from '@/components/NewArrivalsSection';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { Product, Category } from '@/components/types';

export default function MenPage() {
  const [showPromo, setShowPromo] = useState<boolean>(true);

  const newArrivals: Product[] = [
    // Different products for men
  ];

  const categories: Category[] = [
    // Different categories for men
  ];

  return (
    <div className="min-h-screen bg-white">
      {showPromo && <PromoBanner onClose={() => setShowPromo(false)} />}
      <Navbar activeCategory="man" />
      <HeroSection />
      <NewArrivalsSection products={newArrivals} title="MEN'S NEW ARRIVALS" />
      <CategorySection categories={categories} title="Shop Men's Categories" />
      <Footer />
    </div>
  );
}