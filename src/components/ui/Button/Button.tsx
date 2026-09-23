import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

import styles from './Button.module.css'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: ButtonSize
  asChild?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={clsx(
          styles.buttonRoot,
          styles[variant],
          styles[size],
          className,
        )}
        ref={ref}
        {...props}
      >
        {icon !== undefined && <div className={styles.iconWrapper}>{icon}</div>}
        {children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button }
