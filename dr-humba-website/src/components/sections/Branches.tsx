import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { branches } from "@/data/branches";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Branches() {
  return (
    <section id="branches" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-pink font-semibold tracking-wider uppercase text-sm mb-3">Our Locations</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-4">Find Dr. Humba Near You</h3>
            <p className="text-lg text-gray-600">
              With multiple branches across Cebu, authentic Filipino comfort food is never too far away. Visit us or order for delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <Card key={branch.id} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden group bg-white">
              <CardHeader className="bg-brand-dark p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <h4 className="text-2xl font-bold text-white group-hover:text-brand-pink transition-colors">{branch.name}</h4>
                  {branch.isOpen247 && (
                    <span className="bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      24/7 OPEN
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-brand-pink" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-brand-dark font-medium leading-tight">{branch.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-brand-pink" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Contact</p>
                    {branch.contact !== "Not Available" ? (
                      <a href={`tel:${branch.contact}`} className="text-brand-dark font-medium hover:text-brand-pink transition-colors block md:hidden">
                        {branch.contact} (Click to Call)
                      </a>
                    ) : null}
                    <p className="text-brand-dark font-medium hidden md:block lg:block">
                      {branch.contact}
                    </p>
                    {branch.contact === "Not Available" && (
                      <p className="text-brand-dark font-medium block md:hidden">
                        {branch.contact}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-brand-pink" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-brand-dark font-medium">
                      {branch.isOpen247 ? "Open 24 Hours, 7 Days a Week" : "Regular Business Hours"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
