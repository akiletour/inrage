type Props = {
  title: string;
  content: string;
  values: Array<string | boolean>
}

export default function TableLine({ title, content, values }: Props) {
  return (
    <div className="flex items-center">
      <div className="flex-1 pl-3 pr-3">
        <h3 className="text-2xl text-orange font-medium">{title}</h3>
        <p className="text-white">{content}</p>
      </div>

      {values.map((value) => (
        <div className="w-25 flex-col text-center text-white text-lg leading-6 flex-none flex items-center justify-center" key={`title-${value}`}>
          {typeof value === 'string'
            ? value.split('|').map((val) => <span key={val}>{val}</span>)
            : <span className={`rounded-full w-2 h-2 ${value ? 'bg-[#2fcc71]' : 'bg-[#e74b3c]'}`} />}
        </div>
      ))}
    </div>
  );
}
