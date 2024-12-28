import clsx from 'clsx'
import styles from './Input.module.scss'

export const Input = ({
  title,
  type = 'txt',
  placeholder,
  colorType,
  value,
  setValue,
}) => {
  return (
    <div
      className={clsx(
        styles.input,
        type === 'message' && styles.msg,
        colorType && styles[colorType]
      )}
    >
      {type !== 'message' ? (
        <input
          onChange={(v) => {}}
          value={value}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          onChange={(v) => {}}
          value={value}
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
