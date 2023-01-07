import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "@/components/common/Text";
import WinePropertyCard from "@/containers/searching/components/WinePropertyCard";
import StarIcon from "@/components/common/Star";
import WineInfoTags from "@/containers/searching/components/WineInfoTags";
import Spacing from "@/components/common/Spacing";
import WineInfoDesc from "./WineInfoDesc";
import SnackBar from "@/components/common/SnackBar";
import useSnackBar from "@/hooks/useSnackBar";
import Modal from "@/components/common/Modal";
import media from "@/styles/media";
import ShareIcon from "/public/images/icons/shareIcon.svg";
import HeartIcon from "/public/images/icons/heart_empty.svg";
import { useQuery } from "react-query";
import { requester } from "@/remotes/requester";

import { IoMdClose } from "react-icons/io";

export const WINE_EMPTY_IMAGE = "/images/empty_wine.png";

const WineInfoCard = ({ wineDetail }) => {
  const {
    name,
    enName,
    rate,
    image,
    country,
    type,
    minAlcohol,
    maxAlcohol,
    maker,
  } = wineDetail;

  const { data } = useQuery(["wineDetail", name], () => {
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

  const hasRate = rate.length > 0;
  const { isShowing, setIsShowing } = useSnackBar(1);

  const linkCopy = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setIsShowing(true);
      });
    } else {
      if (!navigator.clipboard.readText()) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }
    }
  };

  const [showModal, setShowModal] = useState(false);

  if (!data) return <div>Loading</div>;

  return (
    <Container>
      <CardContainer>
        <Image src={data} alt={name} width={220} height={320} />
        <InfoWrapper>
          <TagContainer>
            <WineInfoTags country={country} type={type} />
            <div>
              <button onClick={() => linkCopy()}>
                <Image
                  src={ShareIcon}
                  alt="share Icon"
                  width={28}
                  height={28}
                />
              </button>
              <button onClick={() => setShowModal(true)}>
                <Image
                  src={HeartIcon}
                  alt="heart Icon"
                  width={28}
                  height={28}
                />
              </button>
            </div>
            {isShowing && (
              <SnackBar text="URL이 클립보드에 복사되었습니다." time={1} />
            )}
          </TagContainer>

          <div>
            <Text size="x3l" color="gray900" weight="bold">
              {name}
            </Text>
            <Spacing height={1} />
            <Text size="xl" color="gray600" weight="medium">
              {enName}
            </Text>
          </div>
          {hasRate && (
            <>
              <Text size="xs" color="descText" weight="light">
                전문가 평가
              </Text>
              <Container>
                <div>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => {
                      return <StarIcon key={index} path={1} />;
                    })}
                </div>
                <Text size="xxs" color="descText" weight="medium">
                  {rate}
                </Text>
              </Container>
            </>
          )}
          <WinePropertyCard wineDetail={wineDetail} />
        </InfoWrapper>
      </CardContainer>
      <WineInfoDesc maker={maker} country={country} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <DownPopUp>
          <BtnWrapper>
            <button onClick={() => setShowModal(false)}>
              <IoMdClose size="20" />
            </button>
          </BtnWrapper>
          <Wrapper>
            <Image
              src={"/images/bgLogo.svg"}
              width={60}
              height={60}
              alt="down modal"
            />
            <p>Minery 앱을 다운로드 해보세요</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.minery.app"
              target="_blank"
              rel="noreferrer"
            >
              <StyledLink>다운로드</StyledLink>
            </a>
          </Wrapper>
        </DownPopUp>
      </Modal>
    </Container>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0.5rem 0.5rem 0 0;
`;
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: small;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: white;
  width: 120px;
  height: 40px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.pointRed};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
`;

const DownPopUp = styled.div`
  width: 320px;
  height: 240px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: white;
  color: white;
  font-weight: 500;

  p {
    color: black;
  }
`;
const Container = styled.div`
  min-height: 70vh;
  margin-top: 1rem;
  padding: 0 0.5rem;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 4rem;
  height: max-content;
  ${media.mobile} {
    flex-direction: column;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile} {
    margin-top: 4px;
  }
`;

const InfoWrapper = styled.div`
  padding: 0 1rem;
  min-height: 24rem;
  display: flex;
  flex-direction: column;
  min-width: 40vw;
  gap: 20px;
  ${media.mobile} {
    padding: 0;
    width: -webkit-fill-available;
    margin-top: 24px;
    min-height: auto;
  }
`;

export default WineInfoCard;
