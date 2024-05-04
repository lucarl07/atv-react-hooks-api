const Input = ({label, id, setValue, ...props}) => {
  const parLabel = label.charAt(0).toUpperCase() + label.slice(1)

  return (
    <>
      <label htmlFor={id}>
        {parLabel}:
      </label>
      <br />
      <input type="text"
        id={id}
        name={id}
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </>
  );
}

export default Input;