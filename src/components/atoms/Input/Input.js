import { useState } from "react";
import styled from "styled-components";

import { pxToEm } from "../../../styles/utils/converters";

const InputGroup = ({ id, label, name, placeholder, type, value, ...rest }) => {
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

    &:focus + label {
      font-size: 0.8em;
      transform: translateY(calc((1em + ${inputPaddingY}) * -1));
    }
  `;

  return (
    <Group>
      <Input id={id} name={name || label} placeholder={placeholder || label} type={type || "text"} value={value} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </Group>
  );
};

export default InputGroup;
