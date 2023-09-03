import { ReactNode } from 'react';

interface CalloutProps {
  children?: ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return <div className="text-white text-2xl md:text-3xl">{children}</div>;
}
