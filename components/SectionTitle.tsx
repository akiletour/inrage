type Props = {
  className?: string;
  title: string | Array<string | JSX.Element>;
  content: string;
};

export default function SectionTitle({
  className = "",
  title,
  content,
}: Props) {
  return (
    <div className={`flex flex-col md:flex-row md:items-center ${className}`}>
      <h2
        className={`${
          Array.isArray(title) && "flex flex-col"
        } max-w-[390px] flex-none text-3xl font-bold text-white`}
      >
        {Array.isArray(title)
          ? title.map((ttl) => <span key={ttl.toString()}>{ttl}</span>)
          : title}
      </h2>
      <p className="mt-2 flex flex-1 items-center text-gray-light md:mt-0">
        <span className="mx-8 hidden h-[120px] w-[2px] flex-none skew-x-[-30deg] bg-gray md:block" />
        {content}
      </p>
    </div>
  );
}
