import { Truck, Clock, Shield, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'شحن سريع',
    description: 'توصيل سريع وآمن لجميع الطلبات'
  },
  {
    icon: Clock,
    title: 'دعم 24/7',
    description: 'فريقنا جاهز لمساعدتك على مدار الساعة'
  },
  {
    icon: Shield,
    title: 'دفع آمن',
    description: 'معاملات مالية آمنة ومشفرة'
  },
  {
    icon: CreditCard,
    title: 'ضمان استرداد',
    description: 'استرداد الأموال خلال 30 يوماً'
  }
];

export function Features() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg"
          >
            <feature.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}