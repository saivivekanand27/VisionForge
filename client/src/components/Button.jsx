import React from "react";
import styled, { css } from "styled-components";
import { CircularProgress } from "@mui/material";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  border: none;

  ${({ variant, theme }) =>
    variant === "outlined"
      ? css`
          background: transparent;
          border: 2px solid ${theme.yellow};
          color: ${theme.yellow};

          &:hover:not(:disabled) {
            background: rgba(232, 212, 77, 0.1);
            box-shadow: 0 0 20px rgba(232, 212, 77, 0.15);
          }
        `
      : css`
          background: ${theme.yellow};
          color: ${theme.black};

          &:hover:not(:disabled) {
            background: #f0dc55;
            box-shadow: 0 4px 20px rgba(232, 212, 77, 0.35);
            transform: translateY(-1px);
          }
        `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  svg {
    font-size: 18px;
  }
`;

const Button = ({
  text,
  leftIcon,
  rightIcon,
  onClick,
  type = "button",
  isLoading = false,
  isDisabled = false,
  variant = "filled",
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      variant={variant}
    >
      {isLoading ? (
        <CircularProgress size={18} sx={{ color: "inherit" }} />
      ) : (
        <>
          {leftIcon}
          {text}
          {rightIcon}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
