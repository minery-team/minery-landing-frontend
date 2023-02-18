import { PATHS } from "@/constants";
import media from "@/styles/media";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "/public/images/Logo.svg";
import MineryLogo from "/public/images/Minery.svg";

const TitleLogo = () => {
  return (
    <Link href={PATHS.home}>
      <TitleLink>
        <LogoContainer>
          <Image src={Logo} alt="마이너리" />
        </LogoContainer>
        <Image src={MineryLogo} alt="Minery" />
      </TitleLink>
    </Link>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  ${media.mobile} {
    display: none;
  }
`;

const TitleLink = styled.a`
  display: flex;
  height: 35px;
`;

export default TitleLogo;
