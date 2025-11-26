import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Users, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookingCardProps {
  price: number;
}

const BookingCard = ({ price }: BookingCardProps) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const nights = calculateNights();
  const subtotal = nights * price;
  const serviceFee = subtotal * 0.1;
  const cleaningFee = 2000;
  const total = subtotal + serviceFee + cleaningFee;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">₹{price.toLocaleString()}</span>
          <span className="text-muted-foreground">/ night</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {/* Check-in & Check-out */}
        <div className="grid grid-cols-2 gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal h-auto py-3",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Check-in</span>
                  {checkIn ? (
                    <span className="text-sm font-medium">{format(checkIn, "MMM dd")}</span>
                  ) : (
                    <span className="text-sm">Add date</span>
                  )}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal h-auto py-3",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Check-out</span>
                  {checkOut ? (
                    <span className="text-sm font-medium">{format(checkOut, "MMM dd")}</span>
                  ) : (
                    <span className="text-sm">Add date</span>
                  )}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="flex items-center justify-between p-4 border border-border rounded-lg">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Guests</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-semibold w-8 text-center">{guests}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setGuests(guests + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="space-y-3 mb-6 pb-6 border-b border-border">
          <div className="flex justify-between text-muted-foreground">
            <span>₹{price.toLocaleString()} x {nights} nights</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Service fee</span>
            <span>₹{serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Cleaning fee</span>
            <span>₹{cleaningFee.toLocaleString()}</span>
          </div>
        </div>
      )}

      {/* Total */}
      {nights > 0 && (
        <div className="flex justify-between items-center mb-6 font-bold text-lg">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      )}

      <Button 
        className="w-full h-12 text-base font-semibold"
        disabled={!checkIn || !checkOut}
      >
        {checkIn && checkOut ? 'Reserve Now' : 'Check Availability'}
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingCard;
