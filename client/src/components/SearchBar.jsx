import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 550px;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.yellow};
    box-shadow: 0 0 0 3px rgba(232, 212, 77, 0.1);
    background: rgba(255, 255, 255, 0.06);
  }

  svg {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 20px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.7;
  }
`;

const SearchBar = ({ value, handleChange }) => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <SearchInput
        placeholder="Search by prompt or author name..."
        value={value}
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
