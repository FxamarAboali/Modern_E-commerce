import { ProductCard } from '@/components/ui/product-card';

const products = [
  {
    id: 1,
    title: 'سماعات لاسلكية فاخرة',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'إلكترونيات',
    rating: 4.8
  },
  {
    id: 2,
    title: 'ساعة ذكية رياضية',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'إلكترونيات',
    rating: 4.5
  },
  {
    id: 3,
    title: 'كاميرا احترافية',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    category: 'إلكترونيات',
    rating: 4.9
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">منتجات مميزة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}