type Props = {
  className?: string,
  content: string,
  title: string,
}

export default function SectionTitle({ className = '', title, content }: Props) {
  return (
    <div className={`flex md:items-center flex-col md:flex-row ${className}`}>
      <h2 className="text-white flex-none text-3xl font-bold max-w-[390px]">{title}</h2>
      <p className="mt-2 md:mt-0 text-gray-light flex-1 flex items-center">
        <span className="hidden md:block w-[2px] h-[120px] mx-8 bg-gray flex-none -skew-x-[30deg]" />
        {content}
      </p>
    </div>
  );
}
