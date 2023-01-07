import Image from "next/image";
import styled from "styled-components";
import { useQuery } from "react-query";
import { searchWine } from "@/remotes/requester";
import Spacing from "@/components/common/Spacing";
import WineItemCard from "./components/WineItemCard";
import media from "@/styles/media";
import Link from "next/link";
import useAOS from "@/hooks/useAOS";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";

interface FormProps {
  keyword: string;
}

const ListPage = () => {
  useAOS();

  const formMethods = useForm<FormProps>({
    defaultValues: {
      keyword: "",
    },
  });
  const { register, getValues, setValue, handleSubmit } = formMethods;
  const [page, setPage] = useState(1);

  const router = useRouter();
  const { query } = router;

  const { data } = useQuery(
    ["searchResults", query, page],
    () =>
      searchWine({
        keyword: getValues("keyword"),
        page: +query.page ?? page,
      }),
    {
      enabled: !!query.keyword,
    }
  );

  const totalResults = useMemo(() => data?.totalCount ?? 0, [data]);

  const onSubmit = () => {
    if (getValues("keyword") === "") return;

    router.push({
      pathname: "/wine/search",
      query: {
        keyword: getValues("keyword"),
        page: 1,
      },
    });
  };

  useEffect(() => {
    if (!query.page) setPage(1);
    if (!!query.keyword) setValue("keyword", query.keyword as string);

    setPage(+query.page);
  }, [query, setValue]);

  const handlePageChange = (page: number) => {
    setPage(page);
    router.push({
      pathname: "/wine/search",
      query: {
        keyword: getValues("keyword"),
        page,
      },
    });
  };
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          name="value"
          placeholder="와인을 검색해 보세요"
          {...register("keyword")}
        />
        <StyledSearchButton type="submit">
          <Image
            src="/images/icons/search_icon.png"
            alt="search"
            width={20}
            height={20}
          />
        </StyledSearchButton>
      </StyledForm>
      <div>
        <Spacing height={3} />

        {!!data && (
          <StyledResult>
            <span>`{query.keyword}` </span>의 검색 결과 {totalResults}개
          </StyledResult>
        )}
        <Spacing height={1} />
        <ListStyle>
          {!!data &&
            data.list.map((wine) => (
              <Link
                key={wine.id}
                href={{
                  pathname: "/wine/[id]",
                  query: {
                    id: wine.id,
                    keyword: query.keyword,
                    page: query.page,
                  },
                }}
              >
                <a>
                  <WineItemCard wine={wine} />
                </a>
              </Link>
            ))}
        </ListStyle>
      </div>
      {!!data && !!data.list && data.list.length !== 0 && (
        <PaginationWrapper>
          <Pagination
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={totalResults}
            pageRangeDisplayed={10}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}
          />
        </PaginationWrapper>
      )}
    </Container>
  );
};

const PaginationWrapper = styled.div`
  width: 22rem;
  ${media.mobile} {
    width: 18rem;
  }
`;

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: inherit;
  padding: 1rem;

  ${media.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.2rem;
  }
  ${media.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }
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

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledResult = styled.div`
  padding: 1rem;
  span {
    font-weight: 700;
  }
`;
const StyledInput = styled.input`
  width: 48rem;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 24px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: 5.5px 12px 5.5px 20px;
  background-color: ${({ theme }) => theme.colors.gray100};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray700};
  }
  ${media.mobile} {
    width: 80vw;
  }
`;
const StyledSearchButton = styled.button`
  position: absolute;
  right: 1.4rem;
`;

export default ListPage;
