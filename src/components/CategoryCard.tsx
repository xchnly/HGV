import Image from "next/image";

interface Category {
  name: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="relative group cursor-pointer h-64 w-full">
      <div className="bg-gray-200 rounded-lg overflow-hidden h-full relative">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <h3 className="text-white text-xl font-bold">{category.name}</h3>
        </div>
      </div>
    </div>
  );
}
