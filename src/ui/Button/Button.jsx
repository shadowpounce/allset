import clsx from 'clsx'
import styles from './Button.module.scss'
import { GsapMagnetic } from '../../components/GsapMagnetic/GsapMagnetic'

export const Button = ({
  children,
  type = 'primary',
  icon,
  iconBg = false,
  className,
  onClick,
}) => {
  return (
    <GsapMagnetic>
      <button
        onClick={onClick && onClick}
        className={clsx(
          styles.button,
          styles[type],
          icon && styles.withIcon,
          iconBg && styles.whiteIcon,
          className && className
        )}
      >
        {children && children}
        {icon && (
          <div className={styles.icon}>
            <img src={icon} alt="" />
          </div>
        )}
      </button>
    </GsapMagnetic>
  )
}
