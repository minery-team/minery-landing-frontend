import Image from "next/image";
import styled from "styled-components";
import useInput from "@/hooks/useInput";
import { useQuery } from "react-query";
import {
  fetchTop10Wines,
  searchWine,
  useSearchResult,
} from "@/remotes/requester";
import WineItemCard from "./components/WineItemCard";
import WineInfoTags from "@/containers/searching/components/WineInfoTags";
import Spacing from "@/components/common/Spacing";
import media from "@/styles/media";
import useAOS from "@/hooks/useAOS";
import { useEffect, useState, useCallback } from "react";

const ListPage = () => {
  useAOS();

  const [value, onChange] = useInput("");

  // const {
  //   data: top10wine,
  //   status,
  //   refetch,
  // } = useQuery("/wineList", fetchTop10Wines);

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

      <Spacing height={8} />
      <div>
        <Top10Text>
          <span>마이너리 사용자들의 추천</span>
          <span>TOP 10</span>
        </Top10Text>
        <Spacing height={4} />
        {/* <ListStyle>
          {top10wine &&
            top10wine.map((wine) => <WineItemCard key={wine.id} wine={wine} />)}
        </ListStyle> */}
      </div>
      <Spacing height={8} />
      <div data-aos="fade-up">
        <Image
          src={"/images/downImg.png"}
          width={1420}
          height={620}
          alt="download app"
        />
      </div>
      <Spacing height={8} />
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

export const Top10Text = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  span:nth-child(2) {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.pointRed};
  }
`;
export const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
`;

export default ListPage;
