export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">عن المتجر</h3>
            <p className="text-sm text-muted-foreground">
              متجر إلكتروني حديث يوفر أفضل المنتجات بأسعار تنافسية
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  من نحن
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  اتصل بنا
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-sm text-muted-foreground hover:text-primary">
                  سياسة الشحن
                </a>
              </li>
              <li>
                <a href="/returns" className="text-sm text-muted-foreground hover:text-primary">
                  سياسة الإرجاع
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                البريد الإلكتروني: info@store.com
              </li>
              <li className="text-sm text-muted-foreground">
                الهاتف: +966 123 456 789
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">النشرة البريدية</h3>
            <p className="text-sm text-muted-foreground mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر العروض والتخفيضات
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>جميع الحقوق محفوظة © 2024 متجري</p>
        </div>
      </div>
    </footer>
  );
}