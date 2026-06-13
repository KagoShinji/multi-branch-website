import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Dr. <span className="text-brand-pink">Humba</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The heart of Filipino cuisine. Serving the best traditional, slow-cooked pork humba in Cebu, made with authentic recipes passed down through generations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
                <InstagramLogoIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
                <TwitterLogoIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#signature" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#branches" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Top Branches */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Top Branches</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Mactan Town Center <span className="text-brand-pink text-xs ml-1 bg-brand-pink/10 px-2 py-0.5 rounded-full">24/7</span></li>
              <li className="text-gray-400">City Time Square <span className="text-brand-pink text-xs ml-1 bg-brand-pink/10 px-2 py-0.5 rounded-full">24/7</span></li>
              <li className="text-gray-400">One Paseo Banilad</li>
              <li className="text-gray-400">Guadalupe</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <span className="block text-white mb-1">Mandaue City:</span> 
                0976 616 3877
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white mb-1">Cebu City (Banilad):</span> 
                0976 317 4967
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white mb-1">Talisay City:</span> 
                0993 729 3199
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Dr. Humba. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
