import LoadIcon from './icons/Load';

type Props = {
  className?: string;
  isLoading?: boolean;
  submit?: boolean;
  children: JSX.Element | string;
};

export default function Button({
  className = '',
  submit = false,
  isLoading = false,
  children,
}: Props) {
  return (
    <button
      disabled={isLoading}
      type={submit ? 'submit' : 'button'}
      className={`button relative ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-orange-dark justify-center z-10 flex items-center">
          <LoadIcon />
        </div>
      )}
      {children}
    </button>
  );
}
