import type { ReactNode } from 'react';
import './laout.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Laout: React.FC<Props> = ({ children, className }) => {
  return <main className="laout">{children}</main>;
};
