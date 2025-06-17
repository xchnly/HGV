import CategoryCard from '@/components/CategoryCard';
import { Category } from '@/components/types';

interface CategorySectionProps {
  categories: Category[];
  title?: string;
}

export default function CategorySection({ categories, title = "Shop by Category" }: CategorySectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}