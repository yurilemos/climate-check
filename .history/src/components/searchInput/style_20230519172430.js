import styled from "styled-components";

export const CustomSearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const SearchInput = styled.div``;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
  position: relative;
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  margin-left: 10px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;
