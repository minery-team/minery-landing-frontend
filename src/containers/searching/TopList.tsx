import React from "react";
import styled from "styled-components";
import media from "@/styles/media";
import WineItemCard from "./components/WineItemCard";
import Spacing from "@/components/common/Spacing";
import Link from "next/link";

const TopList = ({ top10Wine }) => {
  return (
    <Container>
      <Top10Text>
        <span>마이너리 사용자들의 추천</span>
        <span>TOP 10</span>
      </Top10Text>

      <Spacing height={2} />
      <ListStyle>
        {top10Wine.map((wine) => {
          return (
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
          );
        })}
      </ListStyle>
    </Container>
  );
};

const Container = styled.div`
  padding: 0.4rem 0;

  max-width: 72rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${media.mobile} {
    max-width: 57.6rem;
  }
`;
const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: inherit;

  ${media.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }
`;
const Top10Text = styled.div`
  width: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  span:nth-child(2) {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.pointRed};
  }
`;

export default TopList;
