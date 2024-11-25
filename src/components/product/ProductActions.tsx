import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductActionsProps {
  onCreateSet: () => void;
  quantity: number;
  onQuantityChange: (value: number) => void;
}

export const ProductActions = ({ onCreateSet, quantity, onQuantityChange }: ProductActionsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold">199,99 zł</div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="w-8 h-8 flex items-center justify-center border rounded-md"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="w-8 h-8 flex items-center justify-center border rounded-md"
          >
            +
          </button>
        </div>
      </div>

      <Button
        onClick={onCreateSet}
        className="w-full py-6 text-lg font-medium"
      >
        Stwórz zestaw
      </Button>

      <div className="flex justify-between items-center pt-4">
        <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
          <MessageCircle className="w-5 h-5" />
          <span>Zapytaj o produkt</span>
        </Button>
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
          <Heart className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};