interface ParameterProps {
  icon: string;
  title: string;
  value: string;
}

const Parameter = ({ icon, title, value }: ParameterProps) => (
  <div className="flex items-center space-x-3">
    <div className="w-6 h-6 flex items-center justify-center">
      <img src={icon} alt="" className="h-6 object-contain" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-gray-600">{title}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  </div>
);

export const ProductParameters = () => {
  return (
    <div className="space-y-4 py-4 border-t border-b">
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