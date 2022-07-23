import React from 'react'

export default function TextInputGroup({
  name, label, type, value, placeholder, onchange
}) {
  return (
    <div className='form-group mb-3'>
      <label htmlFor={name} style={{display:'block'}}> {label}</label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onchange}
      ></input>
    </div>

  )
}
