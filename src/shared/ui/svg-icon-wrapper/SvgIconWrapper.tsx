import type { FC, JSX } from 'react';

type Direction = 'prev' | 'next';

interface SvgIconWrapperProps {
  Svg: FC<React.SVGProps<SVGSVGElement>>;
  width?: number | string;
  height?: number | string;
  color?: string;
  direction?: Direction;
}

export const SvgIconWrapper = (props: SvgIconWrapperProps): JSX.Element => {
  const { Svg, height, width, color, direction = 'next' } = props;

  const rotate = direction === 'next' ? 'rotate(0deg)' : 'rotate(180deg)';

  return (
    <Svg
      width={width}
      height={height}
      stroke={color}
      style={{ color, transform: rotate, transformOrigin: '50% 50%' }}
    />
  );
};
