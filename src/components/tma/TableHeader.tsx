type Props = {
  support: string;
  types: Array<{
    name: string;
    price: string;
  }>;
};

export default function TableHeader({ support, types }: Props) {
  return (
    <>
      <h2 className="block lg:hidden text-center mb-4 w-full text-white font-bold text-3xl pl-3 pr-3">
        <span className="block">Offres de maintenance</span>
        <span className="block">{`TMA spécialisée ${support}`}</span>
      </h2>
      <div className="sticky top-11 py-2 bg-[#020202]">
        <div className="flex justify-center lg:justify-start flex-wrap text-center lg:text-left">
          <h2 className="hidden lg:block lg:flex-1 mb-4 lg:mb-0 w-full lg:w-auto text-white font-bold text-3xl pl-3 pr-3">
            <span className="block">Offres de maintenance</span>
            <span className="block">{`TMA spécialisée ${support}`}</span>
          </h2>

          {types.map(({ name, price }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={index}
              className="ml-1 lg:w-25 flex-1 lg:flex-none bg-orange rounded-xl flex-col flex items-center justify-center text-white text-center"
            >
              <div className="text-xl font-bold">{name}</div>
              <div>{price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
