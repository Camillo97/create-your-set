interface ParameterProps {
  icon: string;
  title: string;
  value: string;
}

const Parameter = ({ icon, title, value }: ParameterProps) => (
  <div className="flex items-start space-x-3 py-2">
    <div className="w-6 h-6 flex items-center justify-center mt-1">
      <img src={icon} alt="" className="h-6 object-contain" />
    </div>
    <div className="flex flex-col">
      <span className="text-[#9B8B7F] text-lg">{title}</span>
      <span className="text-gray-700">{value}</span>
    </div>
  </div>
);

export const ProductParameters = () => {
  return (
    <div className="space-y-2 py-4 border-b">
      <Parameter
        icon="https://pbnails.pl/files/feature/feature-832.png"
        title="Pojemność"
        value="8ml"
      />
      <Parameter
        icon="https://pbnails.pl/files/feature/feature-351.png"
        title="Przeznaczenie"
        value="do manicure hybrydowego"
      />
      <Parameter
        icon="https://pbnails.pl/files/feature/feature-835.png"
        title="Kolekcja"
        value="Bestsellers"
      />
    </div>
  );
};