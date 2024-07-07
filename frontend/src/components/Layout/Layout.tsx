import type { ReactNode } from 'react';
import './layout.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Layout: React.FC<Props> = ({ children, className }) => {
  return <main className="layout">{children}</main>;
};
