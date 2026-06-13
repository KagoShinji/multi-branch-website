import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureDish from "@/components/sections/SignatureDish";
import Features from "@/components/sections/Features";
import Branches from "@/components/sections/Branches";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased text-brand-dark overflow-x-hidden selection:bg-brand-pink/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDish />
        <Features />
        <Branches />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
