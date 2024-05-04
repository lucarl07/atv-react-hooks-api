import React from "react";
import Input from "../Input/Input";

const Modal = ({type}) => {
  const [value, setValue] = React.useState("")

  return (
    <>
      <Input label={type}
        id={type}
        value={value}
        setValue={setValue}
      />
      <p>{value}</p>
    </>
  )
}

export default Modal;