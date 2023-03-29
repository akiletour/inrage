type Props = {
  title: string;
  content: string;
  values: Array<string | boolean>;
};

export default function TableLine({ title, content, values }: Props) {
  return (
    <div className="flex items-center flex-wrap">
      <div className="w-full mb-2 lg:mb-0 lg:w-auto lg:flex-1 px-2 lg:px-3">
        <h3 className="text-xl lg:text-2xl text-orange font-medium">{title}</h3>
        <p className="text-white">{content}</p>
      </div>

      {values.map((value, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          className="lg:w-25 flex-1 lg:flex-none flex-col text-center text-white text-lg leading-6 flex items-center justify-center"
          key={idx}
        >
          {typeof value === 'string' ? (
            // eslint-disable-next-line react/no-array-index-key
            value.split('|').map((val, index) => <span key={index}>{val}</span>)
          ) : (
            <span
              className={`rounded-full w-2 h-2 ${
                value ? 'bg-[#2fcc71]' : 'bg-[#e74b3c]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
