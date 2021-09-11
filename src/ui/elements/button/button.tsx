import type { FunctionComponent as FC } from 'preact'
import { h } from 'preact'
import cn from 'classnames'

import { Loader } from '~/ui/elements/loader'
import { Icon } from '~/ui/elements/icon'

import styles from './button.styl'

export type Props = {
  class?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  loading?: boolean
  brand?: boolean
  light?: boolean
  error?: boolean
  uppercase?: boolean
  round?: boolean
  square?: boolean
  outline?: boolean
  inline?: boolean
  icon?: string
  onClick?: (ev?) => void
  onTouchStart?: (ev?) => void
  onTouchEnd?: (ev?) => void
}

export const Button: FC<Props> = ({
  children,
  class: className,
  type = 'button',
  disabled,
  loading,
  brand,
  light,
  error,
  uppercase,
  round,
  square,
  outline,
  inline,
  icon,
  onClick,
  onTouchStart,
  onTouchEnd
}) => {
  return loading ? (
    <Loader brand big/>
  ) : (
    <button
      class={cn(
        styles.root,
        className,
        disabled && styles._disabled,
        loading && styles._loading,
        brand && styles._brand,
        light && styles._light,
        error && styles._error,
        uppercase && styles._uppercase,
        round && styles._round,
        square && styles._square,
        outline && styles._outline,
        inline && styles._inline,
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {icon === 'loader' ? (
        <Loader/>
      ) : icon ? (
        <Icon icon={icon}/>
      ) : null}
      {children}
    </button>
  )
}
