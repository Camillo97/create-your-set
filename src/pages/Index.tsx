import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const availablePolishes: Product[] = [
  { id: "1", name: "Lakier hybrydowy Mat White", price: 39.99, image: "https://pbnails.pl/files/fotob/product-2337.jpg" },
  { id: "2", name: "Lakier hybrydowy Princess Red", price: 39.99, image: "https://pbnails.pl/files/fotob/product-2330.jpg" },
  { id: "3", name: "Lakier hybrydowy Lush", price: 39.99, image: "https://pbnails.pl/files/fotob/product-2336.jpg" },
  { id: "4", name: "Lakier hybrydowy Sexy Plum", price: 39.99, image: "https://pbnails.pl/files/fotob/product-2334.jpg" },
  { id: "5", name: "Lakier hybrydowy Holika", price: 39.99, image: "https://pbnails.pl/files/fotob/product-2341.jpg" },
  { id: "6", name: "Lakier hybrydowy Max Black", price: 39.99, image: "https://pbnails.pl/files/fotob/product-2342.png" },
];

const MAX_SELECTIONS = 5;

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPolishes, setSelectedPolishes] = useState<string[]>([]);

  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  const handlePolishSelection = (polishId: string) => {
    setSelectedPolishes((current) => {
      if (current.includes(polishId)) {
        return current.filter((id) => id !== polishId);
      }
      if (current.length >= MAX_SELECTIONS) {
        toast({
          title: "Maksymalna ilość produktów",
          description: `Możesz wybrać maksymalnie ${MAX_SELECTIONS} produktów do zestawu.`,
          variant: "destructive",
        });
        return current;
      }
      return [...current, polishId];
    });
  };

  const handleCreateSet = () => {
    if (selectedPolishes.length === 0) {
      toast({
        title: "Wybierz produkty",
        description: "Wybierz przynajmniej jeden produkt do zestawu.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Zestaw utworzony!",
      description: "Twój zestaw został dodany do koszyka.",
    });
    setIsModalOpen(false);
    setSelectedPolishes([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-gray-100 rounded-md overflow-hidden ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img src={image} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right column - Product info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">Zestaw lakierów hybrydowych Bestsellers</h1>
          <div className="space-y-2">
            <p className="text-2xl font-bold">199,99 zł</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Stwórz zestaw
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Stwórz własny zestaw</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-600 mb-2">
              Wybierz do {MAX_SELECTIONS} lakierów hybrydowych do swojego zestawu. Pozostało:{" "}
              <span className="font-semibold">
                {MAX_SELECTIONS - selectedPolishes.length} z {MAX_SELECTIONS}
              </span>
            </p>
            <div className="space-y-4">
              {availablePolishes.map((polish) => (
                <div key={polish.id} className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg">
                  <Checkbox
                    id={polish.id}
                    checked={selectedPolishes.includes(polish.id)}
                    onCheckedChange={() => handlePolishSelection(polish.id)}
                    className="h-6 w-6 rounded-md border-2"
                  />
                  <img
                    src={polish.image}
                    alt={polish.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <label htmlFor={polish.id} className="flex-1 cursor-pointer">
                    {polish.name}
                  </label>
                  <span className="text-gray-600">{polish.price} zł</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-semibold">
                Razem: {(selectedPolishes.length * 39.99).toFixed(2)} zł
              </p>
              <div className="space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Anuluj
                </button>
                <button
                  onClick={handleCreateSet}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Zatwierdź zestaw
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;