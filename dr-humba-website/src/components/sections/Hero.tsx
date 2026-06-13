import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MapPin, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between bg-brand-dark"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <img 
          src="/images/drhumba.jpg" 
          alt="Filipino Cuisine" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Additional gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating Island Navbar */}
      <nav className={`relative z-50 w-full max-w-[1600px] mx-auto px-6 py-6 md:py-8 flex items-center justify-between transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${isLoaded ? 'translate-y-0 opacity-100 blur-0' : '-translate-y-8 opacity-0 blur-md'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-pink rounded-full border-[3px] border-brand-dark shadow-sm flex items-center justify-center overflow-hidden shrink-0">
             <span className="font-heading font-black text-white text-stroke-thin text-sm md:text-base leading-none translate-y-[2px]">DH</span>
          </div>
          <span className="font-heading text-2xl md:text-3xl text-white tracking-widest uppercase hidden sm:block drop-shadow-md text-stroke-thin">
            Dr. Humba
          </span>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {['Home', 'Story', 'Food', 'Catering', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="font-sans font-black text-white tracking-[0.2em] uppercase text-[13px] hover:text-brand-pink transition-colors relative group drop-shadow-md"
            >
              {link}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[3px] bg-brand-pink transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <Button 
            className="hidden sm:flex jagged-edge bg-transparent hover:bg-transparent text-brand-dark font-heading text-xl px-10 py-7 uppercase hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-xl"
          >
            <span className="relative z-10 translate-y-1">Order Now</span>
          </Button>
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white p-2 hover:text-brand-pink transition-colors">
            <Menu className="w-8 h-8 drop-shadow-md" />
          </button>
        </div>
      </nav>

      {/* Hero Content (Behemoth Typography) */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 flex-1 flex flex-col justify-center pb-24 pt-10">
        
        <div className={`max-w-5xl transition-all duration-[1200ms] delay-200 ease-[cubic-bezier(0.32,0.72,0,1)] ${isLoaded ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-16 opacity-0 blur-md'}`}>
          
          <h1 className="flex flex-col items-start select-none">
            {/* Line 1 */}
            <span className="font-heading text-[4.5rem] sm:text-7xl md:text-[7rem] lg:text-[8.5rem] leading-[0.85] tracking-tight uppercase text-stroke-thick mb-[-0.5rem] md:mb-[-1.5rem] relative z-20 hover:scale-[1.01] transition-transform duration-500 origin-left drop-shadow-2xl">
              Comfort Food
            </span>
            
            {/* Line 2 */}
            <div className="relative z-30 flex items-center ml-16 sm:ml-28 md:ml-40 -rotate-3 hover:rotate-0 transition-transform duration-500 origin-center">
              <span className="font-script text-6xl md:text-8xl lg:text-[7.5rem] text-brand-yellow font-bold px-4 py-2" style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.8))' }}>
                from
              </span>
            </div>
            
            {/* Line 3 */}
            <span className="font-heading text-[5.5rem] sm:text-8xl md:text-[8.5rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase text-stroke-thick mb-10 relative z-10 hover:scale-[1.01] transition-transform duration-500 origin-left drop-shadow-2xl">
              DR. HUMBA
            </span>
          </h1>

          <p className={`font-sans text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed mb-12 drop-shadow-md transition-all duration-[1200ms] delay-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Experience the authentic flavors of Dr. Humba — a slow-cooked pork delicacy made with aromatic herbs, vinegar, soy sauce, and generations of Filipino tradition.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row items-center gap-5 transition-all duration-[1200ms] delay-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-brand-dark/60 backdrop-blur-md border-[2px] border-white/20 hover:bg-brand-dark hover:border-brand-cyan text-white h-16 px-10 rounded-[2rem] shadow-2xl transition-all duration-300 group active:scale-[0.98]"
            >
              <MapPin className="mr-3 h-6 w-6 text-brand-cyan group-hover:scale-110 transition-transform" />
              <span className="font-sans font-black tracking-[0.15em] uppercase text-sm mt-0.5">Find Branches</span>
            </Button>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-300 text-brand-dark h-16 px-10 rounded-[2rem] shadow-xl shadow-brand-yellow/20 transition-all duration-300 group active:scale-[0.98] border-[2px] border-transparent"
            >
              <span className="font-sans font-black tracking-[0.15em] uppercase text-sm mr-4 mt-0.5">Order Now</span>
              <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark/20 transition-colors group-hover:translate-x-1">
                <ArrowRightIcon className="h-6 w-6 stroke-[3px]" />
              </div>
            </Button>
          </div>

        </div>
      </div>
      
      {/* Absolute Bottom Decorative Gradient */}
      <div className={`absolute bottom-0 w-full h-40 bg-gradient-to-t from-brand-light via-brand-light/50 to-transparent z-20 pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />
    </section>
  );
}
