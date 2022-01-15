interface Props {
  icon: JSX.Element;
  value: string;
  label: string;
}

export default function KeypointItem({ icon, value, label }: Props) {
  return (
    <div className="text-center text-white flex items-center flex-col">
      <div className="w-10 md:w-15 h-10 md:h-15 border-2 border-white rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="font-medium text-2xl mt-2">{value}</div>
      <div className="leading-5">{label}</div>
    </div>
  );
}
