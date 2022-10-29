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

  return (
    <Container>
      <CardContainer>
        <Image src={image} alt={name} width={248} height={360} />
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
          <Spacing height={2} />
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
          <Image
            src={"/images/Logo.svg"}
            width={40}
            height={40}
            alt="down modal"
          />
          <p>Minery 앱을 다운로드 해보세요</p>
        </DownPopUp>
      </Modal>
    </Container>
  );
};

const DownPopUp = styled.div`
  width: 320px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #161515f0;
  color: white;
  border: 1px solid black;
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
  ${media.mobile} {
    padding: 1rem 0.5rem;
    margin-top: 24px;
    min-height: auto;
  }
`;

export default WineInfoCard;
