import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
import { Flame, Leaf, UtensilsCrossed, Droplets, Droplet } from "lucide-react";

export default function SignatureDish() {
  const ingredients = [
    {
      name: "Premium Pork",
      icon: <UtensilsCrossed className="h-6 w-6 text-brand-pink" />,
      desc: "Selected belly cuts"
    },
    {
      name: "Aromatic Herbs",
      icon: <Leaf className="h-6 w-6 text-brand-pink" />,
      desc: "Fresh, traditional herbs"
    },
    {
      name: "Soy Sauce",
      icon: <Droplets className="h-6 w-6 text-brand-pink" />,
      desc: "Rich & savory glaze"
    },
    {
      name: "Vinegar",
      icon: <Droplet className="h-6 w-6 text-brand-pink" />,
      desc: "Perfect tanginess"
    },
    {
      name: "Slow-Cooked",
      icon: <Flame className="h-6 w-6 text-brand-pink" />,
      desc: "Simmered to perfection"
    }
  ];

  return (
    <section id="signature" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-pink font-semibold tracking-wider uppercase text-sm mb-3">Our Pride</h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-6">The Signature Dr. Humba</h3>
          <p className="text-xl text-gray-600 font-medium italic mb-2">
            "A dish made for celebrations, shared with the people you love."
          </p>
          <div className="w-24 h-1 bg-brand-pink mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ingredients.map((item, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl group cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-pink transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-bold text-brand-dark mb-1">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-pink rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-pink rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h4 className="text-3xl font-bold mb-4">The Secret to Soft, Fragrant Pork</h4>
              <p className="text-gray-300 text-lg">
                We don't rush perfection. Our humba is slow-cooked for hours to ensure that every layer of the pork belly absorbs the deep, rich flavors of our marinades. The result? Melt-in-your-mouth goodness.
              </p>
            </div>
            <ul className="space-y-4 min-w-[250px]">
              {['Melt-in-your-mouth tenderness', 'Deep flavor penetration', 'Perfect fat-to-meat ratio'].map((benefit, i) => (
                <li key={i} className="flex items-center text-white font-medium bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">
                  <CheckIcon className="h-5 w-5 text-brand-pink mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
