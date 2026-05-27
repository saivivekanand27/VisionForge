import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  letter-spacing: 0.3px;
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.yellow};
    box-shadow: 0 0 0 3px rgba(232, 212, 77, 0.1);
    background: rgba(255, 255, 255, 0.06);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.6;
  }
`;

const TextareaStyled = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 80px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.yellow};
    box-shadow: 0 0 0 3px rgba(232, 212, 77, 0.1);
    background: rgba(255, 255, 255, 0.06);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.6;
  }
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
  rows,
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      {rows && rows > 1 ? (
        <TextareaStyled
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          rows={rows}
        />
      ) : (
        <InputStyled
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
        />
      )}
    </Container>
  );
};

export default TextInput;
