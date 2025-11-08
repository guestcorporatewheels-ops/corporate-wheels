import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DateInput from "@/components/ui/DateInput";
import TimeInput from "@/components/ui/TimeInput";
import SelectInput from "@/components/ui/SelectInput";

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

  const { register, handleSubmit, formState, setValue, watch } =
    useForm<BookingForm>({
      defaultValues: {
        pickup: "",
        dropoff: "",
        duration: "",
        date: "",
        time: "",
      },
    });

  // Use watch to get current values for controlled Date/Time inputs
  const watchedDate = watch("date");
  const watchedTime = watch("time");
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
        className="bg-black/80 border-2 border-corporate-gold rounded-2xl p-6 shadow-glow flex flex-col gap-6 items-center"
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <motion.div
              className="flex-1 flex flex-col gap-2"
              custom={1}
              variants={item}
            >
              <label className="text-base font-semibold text-corporate-gold">
                From
              </label>
              <input
                {...register("pickup", { required: true })}
                placeholder="Pickup location"
                className="w-full h-12 px-4 rounded-xl bg-black/70 border border-corporate-gold text-white placeholder:text-corporate-gold focus:outline-none focus:ring-2 focus:ring-corporate-gold focus:border-corporate-gold"
              />
            </motion.div>

            <motion.div
              className="flex-1 flex flex-col gap-2"
              custom={2}
              variants={item}
            >
              {bookingType === "one-way" ? (
                <>
                  <label className="text-base font-semibold text-corporate-gold">
                    To
                  </label>
                  <input
                    {...register("dropoff", { required: true })}
                    placeholder="Destination"
                    className="w-full h-12 px-4 rounded-xl bg-black/70 border border-corporate-gold text-white placeholder:text-corporate-gold focus:outline-none focus:ring-2 focus:ring-corporate-gold focus:border-corporate-gold"
                  />
                </>
              ) : (
                <>
                  <label className="text-base font-semibold text-corporate-gold">
                    Duration
                  </label>
                  <SelectInput
                    options={[
                      { value: "2", label: "2 hours" },
                      { value: "4", label: "4 hours" },
                      { value: "6", label: "6 hours" },
                      { value: "8", label: "8 hours" },
                      { value: "12", label: "12 hours" },
                      { value: "24", label: "24 hours" },
                    ]}
                    placeholder="Select duration"
                    value={watch("duration")}
                    onChange={(v) =>
                      setValue("duration", v, {
                        shouldValidate: true,
                        shouldDirty: true,
                      })
                    }
                    ariaLabel="Duration"
                    name="duration"
                    className="w-full rounded-xl border border-corporate-gold bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-corporate-gold"
                  />
                </>
              )}
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <motion.div
              className="flex-1 flex flex-col gap-2"
              custom={3}
              variants={item}
            >
              <label className="text-base font-semibold text-corporate-gold">
                Date
              </label>
              <DateInput
                value={watchedDate}
                onChange={(d) =>
                  setValue("date", d, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                ariaLabel="Booking date"
                name="widget-date"
                className="w-full rounded-xl border border-corporate-gold bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-corporate-gold"
              />
            </motion.div>

            <motion.div
              className="flex-1 flex flex-col gap-2"
              custom={4}
              variants={item}
            >
              <label className="text-base font-semibold text-corporate-gold">
                Time
              </label>
              <TimeInput
                value={watchedTime}
                onChange={(t) =>
                  setValue("time", t, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                ariaLabel="Booking time"
                name="widget-time"
                className="w-full rounded-xl border border-corporate-gold bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-corporate-gold"
              />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-end pt-4"
            custom={5}
            variants={item}
          >
            <Button
              type="submit"
              variant="glow"
              className="h-12 px-8 text-black font-bold text-lg shadow-glow bg-gradient-to-r from-[#E6A700] to-[#FF6B35]"
            >
              <span className="flex items-center gap-2">
                Search Rides
                <ArrowRight className="size-5 text-corporate-gold" />
              </span>
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}
