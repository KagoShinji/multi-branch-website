export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-brand-pink/20 rounded-[2rem] transform -rotate-3 transition-transform group-hover:-rotate-6 duration-500 z-0"></div>
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/humba.jpg" 
                alt="Traditional Filipino Humba" 
                className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-dark text-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] animate-bounce-slow">
              <p className="font-bold text-2xl text-brand-pink mb-1">100%</p>
              <p className="text-sm font-medium">Authentic Filipino Recipe</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-brand-pink font-semibold tracking-wider uppercase text-sm mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              A Tradition of Flavor,<br/> Shared with Love.
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Humba is a popular dish served during fiestas, birthdays, and special occasions. At <strong className="text-brand-dark">Dr. Humba</strong>, we celebrate this rich culinary heritage.
              </p>
              <p>
                Our signature dish is a slow-cooked stew of pork, aromatics, herbs, vinegar, and soy sauce. It is taken from the braised pork belly <em>"nga baboy"</em>, which translates to soft, fragrant pork that melts in your mouth.
              </p>
              <p className="text-xl font-medium text-brand-dark italic border-l-4 border-brand-pink pl-6 py-2 bg-brand-pink/5 rounded-r-lg">
                "Every serving carries the warmth of Filipino family gatherings and the comfort of traditional home-cooked meals."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-brand-dark mb-2">24/7</h4>
                <p className="text-gray-600 text-sm font-medium uppercase tracking-wide">Selected Branches</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-brand-dark mb-2">6+</h4>
                <p className="text-gray-600 text-sm font-medium uppercase tracking-wide">Locations in Cebu</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
