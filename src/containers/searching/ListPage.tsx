import Image from "next/image";
import styled from "styled-components";
import useInput from "@/hooks/useInput";
import { useQuery, useMutation } from "react-query";
import { searchWine } from "@/remotes/requester";
import WineInfoTags from "@/containers/searching/components/WineInfoTags";
import Spacing from "@/components/common/Spacing";
import WineItemCard from "./components/WineItemCard";
import media from "@/styles/media";
import Link from "next/link";
import useAOS from "@/hooks/useAOS";

const ListPage = () => {
  useAOS();

  const [value, onChange] = useInput("");

  const isEmptyOrNull = (value) =>
    value === null || value.toString().length === 0 || value === undefined;

  const {
    data: searchResults,
    mutate,
    status,
  } = useMutation(
    ({ keyword, pageNum }: { keyword: string; pageNum: number }) =>
      searchWine({ keyword: value, page: pageNum })
  );

  const doSearch = (e) => {
    e.preventDefault();
    if (!isEmptyOrNull(value)) {
      mutate({ keyword: value as string, pageNum: 0 });
    } else if (isEmptyOrNull(value)) {
      alert("검색어를 입력해주세요");
    }
  };

  console.log("searchResults", searchResults);
  const pageNum = !searchResults ? 0 : Math.ceil(searchResults.totalCount / 20);
  console.log("#", Math.ceil(pageNum));
  const pageArr = Array.from({ length: pageNum }, (_, i) => i + 1);
  console.log("#", pageArr);

  const onClickPaging = (e) => {
    console.log("#", e.target.innerText);
    mutate({ keyword: value, pageNum: +e.target.innerText });
  };

  // totalCount, 1 페이지 당 보여줄 와인 수 -> pagination 버튼 렌더링
  // 렌더링 되면 1, 2, 3 ,... ,100 -> +e.target.innerText. 각 페이지 숫자가 나올테니

  return (
    <Container>
      <StyledForm onSubmit={(e) => doSearch(e)}>
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
      <div>
        <Spacing height={3} />
        <div>
          {status !== "success" ? (
            <div />
          ) : (
            <span>
              <span>`{value}` </span>의 검색 결과 {searchResults.totalCount}개
            </span>
          )}
          <div>최신순</div>
        </div>
        <Spacing height={4} />
        <ListStyle>
          {value !== "" &&
            status === "success" &&
            searchResults.list?.map((wine) => (
              <Link
                key={wine.id}
                href={{
                  pathname: "/wine/[id]",
                  query: { id: wine.id },
                }}
              >
                <a>
                  <WineItemCard wine={wine} />
                </a>
              </Link>
            ))}
        </ListStyle>
      </div>
      <button type="button" onClick={(e) => onClickPaging(e)}>
        {pageArr.map((page, idx) => (
          <span key={idx}>{page}</span>
        ))}
      </button>
    </Container>
  );
};

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 0.5rem;
  width: 64rem;
  padding: 1rem;
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
