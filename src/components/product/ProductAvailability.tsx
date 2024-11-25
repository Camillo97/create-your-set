import { CircleCheck, Truck } from "lucide-react";

export const ProductAvailability = () => {
  return (
    <div className="flex items-center justify-between w-full text-sm">
      <div className="flex items-center space-x-2">
        <CircleCheck className="w-5 h-5 text-green-500" />
        <span>Dostępny</span>
      </div>
      <div className="flex items-center space-x-2">
        <Truck className="w-5 h-5" />
        <span>Wysyłka 24h</span>
      </div>
    </div>
  );
};