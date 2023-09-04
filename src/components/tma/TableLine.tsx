type Props = {
  title: string;
  content: string;
  values: Array<string | boolean>;
};

export default function TableLine({ title, content, values }: Props) {
  return (
    <div className="flex flex-wrap items-center">
      <div className="mb-2 w-full px-2 lg:mb-0 lg:w-auto lg:flex-1 lg:px-3">
        <h3 className="text-xl font-medium text-orange lg:text-2xl">{title}</h3>
        <p className="text-white">{content}</p>
      </div>

      {values.map((value, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          className="flex flex-1 flex-col items-center justify-center text-center text-lg leading-6 text-white lg:w-25 lg:flex-none"
          key={idx}
        >
          {typeof value === 'string' ? (
            // eslint-disable-next-line react/no-array-index-key
            value.split('|').map((val, index) => <span key={index}>{val}</span>)
          ) : (
            <span
              className={`h-2 w-2 rounded-full ${
                value ? 'bg-[#2fcc71]' : 'bg-[#e74b3c]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
