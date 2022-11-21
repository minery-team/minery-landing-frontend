import Image from "next/image";
import styled from "styled-components";
import { useQuery } from "react-query";
import { searchWine } from "@/remotes/requester";
import Spacing from "@/components/common/Spacing";
import WineItemCard from "./components/WineItemCard";
import media from "@/styles/media";
import Link from "next/link";
import useAOS from "@/hooks/useAOS";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

// TODO :: 페이지네이션
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
  const { register, getValues, handleSubmit } = formMethods;
  const [page, setPage] = useState(0);

  const router = useRouter();
  const { query } = router;

  const { data } = useQuery(
    ["searchResults", query.keyword, page],
    () => searchWine({ keyword: query.keyword as string, page }),
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
          {!!data && (
            <div>
              <span>`{query.keyword}` </span>의 검색 결과 {totalResults}개
            </div>
          )}
        </div>
        <Spacing height={4} />
        <ListStyle>
          {!!data &&
            data.list.map((wine) => (
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
      <div>
        {/* {hasNextPage && (
          <button type="button" onClick={() => fetchNextPage()}>
            더보기
          </button>
        )} */}
      </div>
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

const StyledForm = styled.form`
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
