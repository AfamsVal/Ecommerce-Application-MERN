import React from "react"

const InputText = ({
  className,
  placeholder,
  type,
  value,
  label,
  onChange,
}) => {
  console.log()
  return (
    <div className="form-group">
      {label && <label htmlFor={type}>{label}</label>}
      <input
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  )
}

export default InputText

InputText.defaultProps = {
  type: "text",
}
