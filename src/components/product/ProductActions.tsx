import { Heart, Mail, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductActionsProps {
  onCreateSet: () => void;
  quantity: number;
  onQuantityChange: (value: number) => void;
}

export const ProductActions = ({ onCreateSet, quantity, onQuantityChange }: ProductActionsProps) => {
  return (
    <div className="space-y-4">
      <div className="text-4xl font-bold text-gray-800 py-4">199,99 zł</div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-white rounded-full border p-1 shadow-sm">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
          >
            +
          </button>
        </div>

        <Button
          onClick={onCreateSet}
          className="flex-1 bg-[#9B8B7F] hover:bg-[#8A7A6E] text-white py-6 text-lg font-medium rounded-full"
        >
          Stwórz zestaw
        </Button>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" className="flex-1 mr-4 space-x-2 py-6 text-gray-700 border-2 rounded-full">
          <Mail className="w-5 h-5" />
          <span>Zapytaj o produkt</span>
        </Button>
        <Button variant="outline" className="w-14 h-14 p-0 text-gray-700 border-2 rounded-full">
          <Heart className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex items-center justify-between pt-6 text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-gray-300" />
            ))}
          </div>
          <span>Opinii: 0</span>
          <button className="text-[#9B8B7F] hover:text-[#8A7A6E]">
            Dodaj opinię
          </button>
        </div>
        <button className="flex items-center space-x-1 text-[#9B8B7F] hover:text-[#8A7A6E]">
          <Plus className="w-4 h-4" />
          <span>Dodaj inspirację</span>
        </button>
      </div>
    </div>
  );
};