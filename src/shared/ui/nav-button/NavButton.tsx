import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import styles from './NavButton.module.scss';
import clsx from 'clsx';

type Size = 'small' | 'medium' | 'large' | 'point' | 'mob';

interface NavnButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: Size;
  children?: ReactNode;
  shadow?: boolean;
}

export const NavButton = forwardRef<HTMLButtonElement, NavnButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      size = 'medium',
      shadow = false,
      ...otherProps
    } = props;

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          styles.btn,
          styles[size],
          shadow && styles.shadow,
          className
        )}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
