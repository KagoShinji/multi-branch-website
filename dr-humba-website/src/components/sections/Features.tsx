import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, PartyPopper, MapPin } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Authentic Filipino Recipe",
      description: "Traditional cooking techniques and secret family recipes passed down through generations.",
      icon: <Heart className="h-8 w-8 text-brand-pink" />,
    },
    {
      title: "Slow-Cooked Perfection",
      description: "Tender, melt-in-your-mouth pork simmered for hours for a deep, rich, and savory flavor.",
      icon: <Clock className="h-8 w-8 text-brand-pink" />,
    },
    {
      title: "Perfect For Every Occasion",
      description: "Whether it's for fiestas, birthdays, family gatherings, or just satisfying everyday cravings.",
      icon: <PartyPopper className="h-8 w-8 text-brand-pink" />,
    },
    {
      title: "Convenient Locations",
      description: "Multiple branches across Cebu with selected 24/7 availability for your late-night humba fixes.",
      icon: <MapPin className="h-8 w-8 text-brand-pink" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-pink/5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-brand-dark/5 rounded-tr-[100px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-pink font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-6">More Than Just a Meal</h3>
          <p className="text-lg text-gray-600">
            We don't just serve food; we serve memories. Discover why Dr. Humba is the go-to choice for authentic Filipino comfort food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-brand-pink/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
