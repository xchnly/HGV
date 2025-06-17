// components/StatsSection.tsx
export function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold mb-2">200+</h3>
            <p className="text-gray-600">International Brands</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold mb-2">2,000+</h3>
            <p className="text-gray-600">High-Quality Products</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold mb-2">30,000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}