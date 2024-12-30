import clsx from 'clsx'
import styles from './Input.module.scss'

export const Input = ({
  title,
  type = 'txt',
  placeholder,
  colorType,
  value,
  onChange,
  addictionSymbol,
}) => {
  return (
    <div
      data-symbol={`${addictionSymbol ? addictionSymbol : ''}`}
      className={clsx(
        styles.input,
        type === 'message' && styles.msg,
        colorType && styles[colorType],
        addictionSymbol && styles.pl
      )}
    >
      {type !== 'message' ? (
        <input
          onChange={onChange && onChange}
          value={value}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          onChange={onChange && onChange}
          value={value}
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
