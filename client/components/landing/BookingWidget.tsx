import { useForm } from "react-hook-form";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface BookingForm {
  pickup: string;
  dropoff: string;
  duration: string;
  date: string;
  time: string;
}

export default function BookingWidget() {
  const [bookingType, setBookingType] = useState<"one-way" | "hourly">(
    "one-way",
  );

  const { register, handleSubmit, formState } = useForm<BookingForm>({
    defaultValues: {
      pickup: "",
      dropoff: "",
      duration: "",
      date: "",
      time: "",
    },
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
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] border border-[hsl(var(--primary))]/20 backdrop-blur-md rounded-2xl p-6"
        custom={0}
        variants={item}
      >
        {/* Tab Selector */}
        <div className="flex mb-6 bg-black/30 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setBookingType("one-way")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              bookingType === "one-way"
                ? "bg-black text-white shadow-sm"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            One-way
          </button>
          <button
            type="button"
            onClick={() => setBookingType("hourly")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              bookingType === "hourly"
                ? "bg-black text-white shadow-sm"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            By the hour
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div className="space-y-2" custom={1} variants={item}>
              <label className="text-sm font-medium text-white">From</label>
              <div className="relative">
                <input
                  {...register("pickup", { required: true })}
                  placeholder="Pickup location"
                  className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                />
              </div>
            </motion.div>

            <motion.div className="space-y-2" custom={2} variants={item}>
              {bookingType === "one-way" ? (
                <>
                  <label className="text-sm font-medium text-white">To</label>
                  <div className="relative">
                    <input
                      {...register("dropoff", { required: true })}
                      placeholder="Destination"
                      className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    />
                  </div>
                </>
              ) : (
                <>
                  <label className="text-sm font-medium text-white">
                    Duration
                  </label>
                  <div className="relative">
                    <select
                      {...register("duration", { required: true })}
                      className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    >
                      <option value="" className="bg-black text-white">
                        Select duration
                      </option>
                      <option value="2" className="bg-black text-white">
                        2 hours
                      </option>
                      <option value="4" className="bg-black text-white">
                        4 hours
                      </option>
                      <option value="6" className="bg-black text-white">
                        6 hours
                      </option>
                      <option value="8" className="bg-black text-white">
                        8 hours
                      </option>
                      <option value="12" className="bg-black text-white">
                        12 hours
                      </option>
                      <option value="24" className="bg-black text-white">
                        24 hours
                      </option>
                    </select>
                  </div>
                </>
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div className="space-y-2" custom={3} variants={item}>
              <label className="text-sm font-medium text-white">Date</label>
              <div className="relative">
                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
              </div>
            </motion.div>

            <motion.div className="space-y-2" custom={4} variants={item}>
              <label className="text-sm font-medium text-white">Time</label>
              <div className="relative">
                <input
                  type="time"
                  {...register("time", { required: true })}
                  className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-end pt-2"
            custom={5}
            variants={item}
          >
            <Button
              type="submit"
              variant="glow"
              className="h-12 px-8 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-black font-medium"
            >
              Search Rides
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}
