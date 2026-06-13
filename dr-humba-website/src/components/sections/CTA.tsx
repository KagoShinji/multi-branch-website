import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-brand-pink relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-dark/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Craving Authentic Humba?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Visit your nearest Dr. Humba branch today and experience the rich, slow-cooked flavors of true Filipino tradition.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            size="lg" 
            className="bg-brand-dark hover:bg-brand-dark/90 text-white text-lg h-14 px-8 rounded-full shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto"
            asChild
          >
            <a href="#branches">
              <MapPin className="mr-2 h-5 w-5" />
              View Locations
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white hover:bg-white/90 text-brand-pink border-transparent hover:border-transparent text-lg h-14 px-8 rounded-full shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto"
            asChild
          >
            <a href="tel:09766163877">
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
