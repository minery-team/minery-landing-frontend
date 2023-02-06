import media from "@/styles/media";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import IcoTistory from "../../../../public/images/tistoryW.svg";
import faceBookw from "../../../../public/images/faceBookW.svg";
import instaW from "../../../../public/images/instaW.svg";
import HeaderIcoTistory from "/public/images/Icotistory.svg";
import { useMemo } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

interface Props {
  isHeader?: boolean;
}

const SNSMenu = ({ isHeader }: Props) => {
  const Instagram = useMemo(() => {
    if (isHeader) {
      return <FaInstagram size={28} />;
    }
    return (
      <Image
        src={instaW}
        draggable="false"
        alt="인스타 링크"
        layout="fill"
        objectFit="contain"
      />
    );
  }, [isHeader]);
  const Facebook = useMemo(() => {
    if (isHeader) {
      return <BsFacebook size={28} />;
    }
    return (
      <Image
        src={faceBookw}
        draggable="false"
        alt="페이스북 링크"
        layout="fill"
        objectFit="contain"
      />
    );
  }, [isHeader]);
  const Tistory = useMemo(() => {
    return (
      <Image
        src={isHeader ? HeaderIcoTistory : IcoTistory}
        draggable="false"
        alt="티스토리 링크"
        layout="fill"
        objectFit="contain"
      />
    );
  }, [isHeader]);

  return (
    <SNSContainer isHeader={isHeader}>
      <Link href="https://www.instagram.com/minery_app/?igshid=YmMyMTA2M2Y%3D">
        <a>{Instagram}</a>
      </Link>
      <Link href="https://www.facebook.com/minery.wine">
        <a>{Facebook}</a>
      </Link>
      <Link href="https://minery.tistory.com/">
        <a style={{ marginRight: 0 }}>{Tistory}</a>
      </Link>
    </SNSContainer>
  );
};

const SNSContainer = styled.div<{ isHeader?: boolean }>`
  display: flex;

  a {
    position: relative;
    display: block;
    width: ${({ isHeader }) => (isHeader ? "28px" : "40px")};
    height: ${({ isHeader }) => (isHeader ? "28px" : "40px")};
    margin-right: 30px;

    ${media.tablet} {
      width: ${({ isHeader }) => (isHeader ? "28px" : "26px")};
      height: ${({ isHeader }) => (isHeader ? "28px" : "26px")};
    }
  }

  ${media.tabletS} {
    display: none;
  }
`;

export default SNSMenu;
