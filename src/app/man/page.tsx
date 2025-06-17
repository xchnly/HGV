'use client';

import { useState } from 'react';
import PromoBanner from '@/components/PromoBanner';
import Navbar from '@/components/Navbar';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { Product, Category } from '@/components/types';
import HeroWithProducts from '@/components/HeroWithProducts';

export default function MenPage() {
  const [showPromo, setShowPromo] = useState<boolean>(true);

  const featuredProducts: Product[] = [
    // Different products for men
  ];

  const categories: Category[] = [
    // Different categories for men
  ];

  return (
    <div className="min-h-screen bg-white">
      {showPromo && <PromoBanner onClose={() => setShowPromo(false)} />}
      <Navbar activeCategory="man" />
      <HeroWithProducts products={featuredProducts} />
      <CategorySection categories={categories} title="Shop Men's Categories" />
      <Footer />
    </div>
  );
}