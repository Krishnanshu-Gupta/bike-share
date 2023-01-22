const FormRow = ({ type, name}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
