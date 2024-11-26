'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    rating: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تم إضافة ${product.title} إلى سلة المشتريات`,
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2">{product.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{product.title}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-muted-foreground">{product.rating}</span>
        </div>
        <p className="font-bold">{product.price} ريال</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          إضافة إلى السلة
        </Button>
      </CardFooter>
    </Card>
  );
}