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
      <h2 className="mb-4 block w-full px-3 text-center text-3xl font-bold text-white lg:hidden">
        <span className="block">Offres de maintenance</span>
        <span className="block">{`TMA spécialisée ${support}`}</span>
      </h2>
      <div className="sticky top-11 bg-[#020202] py-2">
        <div className="flex flex-wrap justify-center text-center lg:justify-start lg:text-left">
          <h2 className="mb-4 hidden w-full px-3 text-3xl font-bold text-white lg:mb-0 lg:block lg:w-auto lg:flex-1">
            <span className="block">Offres de maintenance</span>
            <span className="block">{`TMA spécialisée ${support}`}</span>
          </h2>

          {types.map(({ name, price }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={index}
              className="ml-1 flex flex-1 flex-col items-center justify-center rounded-xl bg-orange text-center text-white lg:w-25 lg:flex-none"
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
