import styled from "styled-components";

export const CustomSearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
  position: relative;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;
