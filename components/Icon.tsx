import type { Property } from 'csstype';

export function Icon({
  v,
  id,
  className,
  c,
  m
}: {
  v?: 's' | 'r' | 'l' | 't' | 'd' | 'b';
  id: string;
  className?: string;
  c?: Property.Color;
  m?: 'Left' | 'Right' | 'Top' | 'Bottom' | 'none';
}) {
  if (!v) v = 's';
  if (!c) c = 'white';
  if (!m) m = 'none';

  const styleToAssign = {
    color: c,
    [`margin${m}`]: '0.5rem'
  };

  return (
    <i
      className={`fa${v} fa-${id}${className?.length ? ` ${className}` : ''}`}
      style={styleToAssign}
    ></i>
  );
}
