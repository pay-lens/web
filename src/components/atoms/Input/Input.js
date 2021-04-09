import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { pxToEm } from "../../../styles/utils/converters";

const InputGroup = ({ id, label, name, onChange, placeholder, type, value, ...rest }) => {
  const [inputValue, setInputValue] = useState(value);
  const inputId = id || uuid();
  const inputHeight = pxToEm(44);
  const inputPaddingX = pxToEm(10);
  const inputPaddingY = pxToEm(4);

  const Group = styled.div`
    display: inline-block;
    font-size: 100%;
    line-height: normal;
    margin: calc(1em + ${pxToEm(8)}) 0 ${pxToEm(8)};
    position: relative;
    vertical-align: top;
    width: 100%;
    z-index: 1;
  `;

  const Label = styled.label`
    bottom: 0;
    cursor: text;
    height: 100%;
    left: 0;
    padding: 0 ${inputPaddingX};
    position: absolute;
    transform: translateY(${pxToEm(11)});
    transition: transform 0.3s ease, font-size 0.3s ease;
  `;

  const Input = styled.input`
    border: none;
    border-bottom: 1px solid #000;
    padding: ${inputPaddingY} ${inputPaddingX};
    height: ${inputHeight};
    outline: none;
    width: 100%;

    &:focus + label,
    &:valid + label {
      font-size: 0.8em;
      transform: translateY(calc((1em + ${inputPaddingY}) * -1));
    }
  `;

  const handleChange = (event) => {
    setInputValue(event.target.value);

    if (onChange && typeof onChange === "function") {
      onChange(event);
    }
  };

  return (
    <Group>
      <Input id={inputId} name={name || label || placeholder} type={type || "text"} onChange={handleChange} value={inputValue} required {...rest} />
      <Label htmlFor={inputId}>{label || placeholder}</Label>
    </Group>
  );
};

export default InputGroup;
