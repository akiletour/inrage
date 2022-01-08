type Props = {
  support: string;
  types: Array<{
    name: string;
    price: string;
  }>
}

export default function TableHeader({ support, types }: Props) {
  return (
    <div className="flex">
      <h2 className="flex-1 text-white font-bold text-3xl pl-3 pr-3">
        <span className="block">Offres de maintenance</span>
        <span className="block">{`TMA spécialisée ${support}`}</span>
      </h2>

      {types.map(({ name, price }) => (
        <div key={name} className="ml-1 w-25 flex-none bg-orange rounded-xl flex-col flex items-center justify-center text-white text-center">
          <div className="text-xl font-bold">{name}</div>
          <div>{price}</div>
        </div>
      ))}
    </div>
  );
}
