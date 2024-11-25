import { CircleCheck, Truck } from "lucide-react";

export const ProductAvailability = () => {
  return (
    <div className="flex items-center justify-between w-full py-4 border-b">
      <div className="flex items-center space-x-2">
        <CircleCheck className="w-5 h-5 text-[#9B8B7F]" />
        <span className="text-sm text-gray-700">Dostępny</span>
      </div>
      <div className="flex items-center space-x-2">
        <Truck className="w-5 h-5 text-gray-700" />
        <span className="text-sm text-gray-700">Wysyłka 24h</span>
      </div>
    </div>
  );
};