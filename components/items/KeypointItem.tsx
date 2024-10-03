interface Props {
  icon: JSX.Element;
  value: string;
  label: string;
}

export default function KeypointItem({ icon, value, label }: Props) {
  return (
    <div className='flex flex-col items-center text-center text-white'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-white md:h-15 md:w-15'>
        {icon}
      </div>
      <div className='mt-2 text-2xl font-medium'>{value}</div>
      <div className='leading-5'>{label}</div>
    </div>
  );
}
