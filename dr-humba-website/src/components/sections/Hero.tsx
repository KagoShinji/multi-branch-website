import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex items-center pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-3 py-1 bg-brand-pink/20 text-brand-pink rounded-full text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-brand-pink/30">
            Authentic Filipino Recipe
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            The Taste of Celebration, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-rose-400">
              The Heart of Filipino Cuisine
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
            Experience the authentic flavors of Dr. Humba — a slow-cooked pork delicacy made with aromatic herbs, vinegar, soy sauce, and generations of Filipino tradition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-brand-pink hover:bg-brand-pink/90 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-brand-pink/25 transition-all hover:scale-105"
            >
              Order Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-lg h-14 px-8 rounded-full backdrop-blur-sm transition-all hover:scale-105"
              asChild
            >
              <a href="#branches">
                <MapPin className="mr-2 h-5 w-5" />
                Find Our Branches
              </a>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-4 text-sm text-gray-300">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-gray-600 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-yellow-400">
                {'★★★★★'}
              </div>
              <span>Loved by 10,000+ Cebuanos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
