import React from 'react'
import styles from './Select.module.scss'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  name: string
  label: string
  options: Option[]
  onChange: (value: string) => void
  value?: string
}

const Select: React.FC<SelectProps> = ({ name, label, options, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
