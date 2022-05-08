import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <div>
      <Input placeholder="와인을 검색해보세요" />
    </div>
  );
};

const SearchInput = styled.div``;

const Input = styled.input``;

export default SearchBar;
