export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Santos",
    content: "The most authentic Humba taste that reminds me of home. The meat is incredibly tender and the sauce is perfectly balanced.",
    rating: 5,
  },
  {
    id: "2",
    name: "John Rey O.",
    content: "Perfect for family gatherings and late-night cravings. We always order from their 24/7 branches and the quality is always consistent.",
    rating: 5,
  },
  {
    id: "3",
    name: "Elena G.",
    content: "Dr. Humba never disappoints! It's our go-to comfort food. Highly recommend for any celebration.",
    rating: 5,
  }
];
