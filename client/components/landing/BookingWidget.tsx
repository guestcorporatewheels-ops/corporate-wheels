import { useForm } from "react-hook-form";
import { Calendar, Clock, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BookingForm {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
}

export default function BookingWidget() {
  const { register, handleSubmit, formState } = useForm<BookingForm>({
    defaultValues: { pickup: "", dropoff: "", date: "", time: "" },
  });

  const onSubmit = (values: BookingForm) => {
    console.log("Booking submitted", values);
    alert("Ride request submitted. We'll confirm shortly.");
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i },
    }),
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3 md:p-4 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] border border-white/10 backdrop-blur-md"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.label className="group relative" custom={0} variants={item}>
        <span className="sr-only">Pickup</span>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <MapPin className="size-4" />
        </div>
        <input
          {...register("pickup", { required: true })}
          placeholder="Pickup location"
          className="w-full h-12 pl-10 pr-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
        />
      </motion.label>
      <motion.label className="group relative" custom={1} variants={item}>
        <span className="sr-only">Drop-off</span>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <MapPin className="size-4" />
        </div>
        <input
          {...register("dropoff", { required: true })}
          placeholder="Drop-off location"
          className="w-full h-12 pl-10 pr-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
        />
      </motion.label>
      <motion.label className="group relative" custom={2} variants={item}>
        <span className="sr-only">Date</span>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Calendar className="size-4" />
        </div>
        <input
          type="date"
          {...register("date", { required: true })}
          className="w-full h-12 pl-10 pr-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
        />
      </motion.label>
      <motion.label className="group relative" custom={3} variants={item}>
        <span className="sr-only">Time</span>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Clock className="size-4" />
        </div>
        <input
          type="time"
          {...register("time", { required: true })}
          className="w-full h-12 pl-10 pr-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
        />
      </motion.label>
      <motion.div
        className="lg:col-span-4 flex justify-end mt-1"
        custom={4}
        variants={item}
      >
        <Button type="submit" variant="glow" className="h-12 px-6">
          <Send className="mr-1" /> Book a Ride
        </Button>
      </motion.div>
    </motion.form>
  );
}
