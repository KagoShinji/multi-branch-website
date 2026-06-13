import { testimonials } from "@/data/testimonials";
import { QuoteIcon } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-pink font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-6">What Our Customers Say</h3>
          <div className="w-24 h-1 bg-brand-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-brand-light p-8 rounded-3xl relative shadow-lg">
              <QuoteIcon className="absolute top-6 right-8 h-12 w-12 text-brand-pink/20" />
              <div className="flex items-center text-brand-pink mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
