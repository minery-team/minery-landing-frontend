import React, { ReactElement } from "react";
import styled from "styled-components";
import SearchIcon from "src/icons/SearchIcon";
import useSearch from "src/hooks/useSearch";
import { WineRequest } from "src/types/request";

interface WineCardProps {
  wineList: WineRequest[];
}
const SearchBar: React.FC<WineCardProps> = ({ wineList }) => {
  const { value, onChange, onSearch } = useSearch("");

  const onTest = () => {
    console.log(wineList);
  };
  return (
    <SearchForm onSubmit={(e) => onSearch(e)}>
      <SearchInput>
        <Input
          type="text"
          placeholder="와인을 검색해보세요"
          onChange={onChange}
          value={value}
        />
        <IconContainer type="submit" onClick={onTest}>
          <SearchIcon />
        </IconContainer>
      </SearchInput>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  width: 600px;
  height: auto;
  margin-bottom: 15px;
`;

const SearchInput = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const IconContainer = styled.button`
  position: absolute;
  left: 555px;
  top: 27px;
  cursor: pointer;
`;

const Input = styled.input`
  margin: 15px 0;
  padding: 10px 10px;
  border: 0.5px solid #7f7f7f;
  background-color: ${({ theme }) => theme.colors.brighterBg};
  width: 100%;
  margin: 15px 0;
  border-radius: 48px;
`;

export default SearchBar;
