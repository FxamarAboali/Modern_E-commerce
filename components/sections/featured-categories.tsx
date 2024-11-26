import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: 'إلكترونيات',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
      count: 150,
    },
    {
      id: 2,
      name: 'ملابس',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
      count: 320,
    },
    {
      id: 3,
      name: 'أثاث',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      count: 90,
    },
    {
      id: 4,
      name: 'مستلزمات منزلية',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
      count: 210,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.name}`}>
          <Card className="overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <CardContent className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm">{category.count} منتج</p>
              </CardContent>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}