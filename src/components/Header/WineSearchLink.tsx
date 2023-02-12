import { PATHS } from "@/constants";
import media from "@/styles/media";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const WineSearchLink = () => {
  const { pathname } = useRouter();

  if (pathname !== PATHS.home) {
    return null;
  }

  return (
    <Link href={PATHS.wine.search}>
      <SearchLink>
        <SearchLinkContent>
          와인 검색하기
          <Image
            src="/images/icons/ic_search.png"
            width={16}
            height={16}
            alt="검색"
          />
        </SearchLinkContent>
      </SearchLink>
    </Link>
  );
};

const SearchLink = styled.a`
  display: flex;
  align-items: center;
  width: 230px;
  height: 38px;
  margin-left: 24px;
  padding: 0px 24px;

  border: 1px solid #2e2e2e;
  border-radius: 27px;

  color: #aaaaaa;

  ${media.mobile} {
    display: none;
  }
`;

const SearchLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default WineSearchLink;
