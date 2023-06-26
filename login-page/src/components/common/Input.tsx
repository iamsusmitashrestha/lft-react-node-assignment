import React, { useState } from "react";
import { Controller } from "react-hook-form";

interface Input {
  label: string;
  type?: string;
}

function InputField(props: Input) {
  const [input, setInput] = useState("");
  const { label, type = "text" } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type={type} value={input} onChange={onChange} />
    </div>
  );
}

export default InputField;
