import Image from "next/image";
import media from "@/styles/media";
import React, { useEffect } from "react";
import styled from "styled-components";
import Spacing from "@/components/common/Spacing";
import Text from "@/components/common/Text";
import WineInfoTags from "@/containers/searching/components/WineInfoTags";
import StarIcon from "@/components/common/Star";
import { requester } from "@/remotes/requester";

import { useQuery } from "react-query";

export const WINE_EMPTY_IMAGE = "/images/empty_wine.png";

const WineItemCard = ({ wine }) => {
  const { enName, name, country, type, price, rate, image, id } = wine;

  const { data } = useQuery(["test", id], () => {
    const res = requester
      .get<string>("/image/bypass", {
        params: { original: image },
      })
      .then((res) => {
        if (res.data.includes("err_img")) {
          return WINE_EMPTY_IMAGE;
        } else {
          return image;
        }
      });
    return res;
  });

  if (!data) return <div>Loading</div>;

  return (
    <Container>
      <ListStyle>
        <Image
          src={data}
          alt={name}
          width={140}
          height={200}
          objectFit="contain"
          placeholder="blur" // 추가
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
        />
        <Overlay />
      </ListStyle>
      <Spacing height={0.8} />
      <Desc>
        <Info>
          <WineInfoTags country={country} type={type} />
          <Rating>
            <StarIcon key={id} path={1} />
            <Spacing height={2.4} />
            <Text size="xxs" color="descText" weight="medium">
              {rate.toFixed(1)}
            </Text>
          </Rating>
        </Info>
        <Spacing height={0.5} />
        <Text size="base" weight="medium">
          {enName}
        </Text>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  width: 220px;
  height: 340px;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    width: 40vw;
    height: 32vh;
    overflow: hidden;
  }
`;

const ListStyle = styled.div`
  display: flex;
  width: inherit;
  height: 20vh;
  flex-direction: column;
  margin-top: 0.2rem;
  align-items: center;
  margin-left: -20px;
  ${media.mobile} {
    height: 16vh;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  padding: -0.5rem;
  align-items: start;
  ${media.mobile} {
    width: 100%;
    padding: 0.2rem;
    margin-top: 0.3rem;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 18px;
    height: 18px;
  }
  div:nth-child(2) {
    margin-left: 4px;
  }
  ${media.mobile} {
    display: none;
  }
`;
const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 8px;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: inherit;
  height: inherit;

  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;
export default WineItemCard;
