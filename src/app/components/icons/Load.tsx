type Props = {
  color?: string;
};

export default function LoadIcon({ color = '#fff' }: Props) {
  return (
    <svg
      height={58}
      className="block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 100"
    >
      <circle cx="6" cy="50" r="6" fill={color}>
        <animateTransform
          attributeName="transform"
          begin=".1"
          dur="1s"
          repeatCount="indefinite"
          type="translate"
          values="0 15 ; 0 -15; 0 15"
        />
      </circle>
      <circle cx="30" cy="50" r="6" fill={color}>
        <animateTransform
          attributeName="transform"
          begin=".2"
          dur="1s"
          repeatCount="indefinite"
          type="translate"
          values="0 10 ; 0 -10; 0 10"
        />
      </circle>
      <circle cx="54" cy="50" r="6" fill={color}>
        <animateTransform
          attributeName="transform"
          begin=".3"
          dur="1s"
          repeatCount="indefinite"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
        />
      </circle>
    </svg>
  );
}
