import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { FeaturedCategories } from '@/components/sections/featured-categories';
import { Features } from '@/components/sections/features';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <div className="container mx-auto px-4">
        <FeaturedCategories />
        <FeaturedProducts />
        <Features />
      </div>
    </div>
  );
}