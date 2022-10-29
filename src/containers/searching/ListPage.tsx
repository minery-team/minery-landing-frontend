import Image from "next/image";
import styled from "styled-components";
import useInput from "@/hooks/useInput";
import { useQuery } from "react-query";
import { searchWine } from "@/remotes/requester";
import WineInfoTags from "@/containers/searching/components/WineInfoTags";
import Spacing from "@/components/common/Spacing";
import WineItemCard from "./components/WineItemCard";
import media from "@/styles/media";
import useAOS from "@/hooks/useAOS";
import { useEffect, useState, useCallback } from "react";

const ListPage = () => {
  useAOS();

  const [value, onChange] = useInput("");

  const isEmptyOrNull = (value) =>
    value === null || value.toString().length === 0 || value === undefined;

  const pageNum = 1;

  const {
    data: wineList,
    status,
    refetch,
  } = useQuery(
    "/wineList",
    () => searchWine({ keyword: value, page: pageNum }),
    {
      enabled: false,
    }
  );

  const doSearch = (e) => {
    e.preventDefault();
    if (!isEmptyOrNull(value)) {
      refetch();
    } else if (isEmptyOrNull(value)) {
      alert("검색어를 입력해주세요");
    }
  };

  return (
    <Container>
      <div>
        <StyledForm onSubmit={doSearch}>
          <StyledInput
            type="text"
            placeholder="와인을 검색해 보세요"
            onChange={onChange}
            value={value}
            name="value"
          />
          <button type="submit">
            <Image
              src="/images/icons/search_icon.png"
              alt="search"
              width={20}
              height={20}
            />
          </button>
        </StyledForm>
      </div>
      <div>
        <Spacing height={3} />
        <div>
          {wineList.list?.length && (
            <span>
              <span>`{value}` </span>의 검색 결과 {wineList.list?.length} 개
            </span>
          )}
          <div>최신순</div>
        </div>
        <Spacing height={4} />
        <WineListStyle>
          {wineList.list?.map((wine) => (
            <WineCard key={wine.id}>
              <Image
                src={wine.image}
                alt={wine.name}
                width={104}
                height={164}
              />
              <div>
                <WineInfoTags country={wine.country} type={wine.type} />
                <span>{wine.rate}</span>
              </div>
              <p>{wine.enName}</p>
            </WineCard>
          ))}
        </WineListStyle>
      </div>
    </Container>
  );
};

const WineListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
`;
const WineCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  height: 16rem;
`;

const Container = styled.div`
  padding: 2rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 72rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tabletL} {
    max-width: 64rem;
  }
  ${media.tabletS} {
    max-width: 57.6rem;
  }
  ${media.mobile} {
    max-width: 26rem;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;
export const StyledInput = styled.input`
  width: 38rem;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 24px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: 5.5px 12px 5.5px 10px;
  background-color: ${({ theme }) => theme.colors.gray100};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

export default ListPage;
