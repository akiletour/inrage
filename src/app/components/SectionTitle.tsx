type Props = {
  className?: string;
  title: string | Array<string | JSX.Element>;
  content: string;
};

export default function SectionTitle({
  className = '',
  title,
  content,
}: Props) {
  return (
    <div className={`flex md:items-center flex-col md:flex-row ${className}`}>
      <h2
        className={`${
          Array.isArray(title) && 'flex flex-col'
        } text-white flex-none text-3xl font-bold max-w-[390px]`}
      >
        {Array.isArray(title)
          ? title.map((ttl) => <span key={ttl.toString()}>{ttl}</span>)
          : title}
      </h2>
      <p className="mt-2 md:mt-0 text-gray-light flex-1 flex items-center">
        <span className="hidden md:block w-[2px] h-[120px] mx-8 bg-gray flex-none -skew-x-[30deg]" />
        {content}
      </p>
    </div>
  );
}
