import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

interface FleetClass {
  title: string;
  car: string;
  desc: string;
  passengers: string;
  suitcases: string;
  image: string;
  slug: string;
}

const fleetClasses: FleetClass[] = [
  {
    title: "VVIP Class",
    car: "Mercedes-Benz E-Class",
    desc: "Speed and elegance are the main requirements for businessmen's cars, therefore the Mercedes-Benz E-Class is the best choice to travel with you.",
    passengers: "3 passengers",
    suitcases: "3 suitcases",
    image: "/images/fleet-premium/vvip-class.jpg",
    slug: "executive-cars",
  },
  {
    title: "Luxury (VIP Class)",
    car: "Mercedes-Benz S-Class",
    desc: "A luxuriously comfortable seat and enough leg room for our VIP clients.",
    passengers: "3 passengers",
    suitcases: "3 suitcases",
    image: "/images/fleet-premium/luxury-vip-class.jpg",
    slug: "luxury-class",
  },
  {
    title: "Premium SUVs",
    car: "Range Rover Autobiography",
    desc: "The stylish, elegant, dignified, spacious nature of a car irrespective of weather.",
    passengers: "4 passengers",
    suitcases: "5 suitcases",
    image: "/images/fleet-premium/premium-suv.jpg",
    slug: "premium-suvs",
  },
  {
    title: "Business MPVs",
    car: "Mercedes-Benz V-Class",
    desc: "Spacious interiors and flexible seats arrangement perfectly tailor-made for business delegates.",
    passengers: "7 passengers",
    suitcases: "7 suitcases",
    image: "/images/fleet-premium/business-mpv.jpg",
    slug: "business-vans",
  },
  {
    title: "Electric Class",
    car: "Mercedes-Benz EQS",
    desc: "Silent, emission neutral, eco-friendly, and luxuriously modern cars.",
    passengers: "3 passengers",
    suitcases: "3 suitcases",
    image: "/images/fleet-premium/electric-class.jpg",
    slug: "electric-class",
  },
  {
    title: "Vintage & Classic",
    car: "Rolls-Royce Silver Cloud",
    desc: "The style and exclusive character of England in classical design that match for weddings and VIP events.",
    passengers: "3 passengers",
    suitcases: "2 suitcases",
    image: "/images/fleet-premium/vintage-classic.jpg",
    slug: "vintage-cars",
  },
];

export default function PremiumFleet() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative">
        <SectionHeading
          tagline="Our Fleet"
          title="Our Premium Fleet"
          subtitle="With sedans for individual businessmen who need to get around on their own and vans for transporting large groups of people along with luggage, our fleet is kept up to high safety and hygiene standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {fleetClasses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-corporate-gold/40 transition-colors"
            >
              <div className="px-6 pt-6">
                <h3 className="font-heading text-xl text-white">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-sm text-corporate-gold mt-1">{item.car}</p>
              </div>

              <div className="relative h-44 mt-4 overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.car}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-1 p-6 pt-5">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.desc}
                </p>

                <div className="flex items-center gap-4 mt-5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-4 text-corporate-gold" />
                    {item.passengers}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="size-4 text-corporate-gold" />
                    {item.suitcases}
                  </span>
                </div>

                <Button asChild variant="outline-glow" className="mt-6 w-full">
                  <Link to={`/fleet/${item.slug}`}>
                    View Class
                    <ArrowRight className="size-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
