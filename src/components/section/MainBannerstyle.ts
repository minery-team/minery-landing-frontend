import styled from "styled-components";
import media from "src/styles/media";

export const Wrapper = styled.div`
  width: 100%;

  /* height: 70vh; */
  overflow: hidden;
  position: relative;
`;

export const Banner = styled.div`
  width: 100%;
  height: 80vh;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: center;
  }
`;

export const BannerTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  text-align: left;
`;

export const Tag = styled.span`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  width: 292px;
  ${media.small} {
    display: none;
  }
`;

export const BannerHeading = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 28px;
  margin-bottom: 12px;
  line-height: 1.8em;
  ${media.small} {
    text-align: center;
    p:nth-child(1) {
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
  }
`;

export const Phoneimg = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
  ${media.small} {
    width: 80%;
    margin: 0 20px;
  }
`;
export const TagWarpper = styled.div`
  margin: 0 256px;

  ${media.small} {
    margin: 0;
  }
`;
export const DescWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${media.small} {
    flex-direction: column;
  }
`;

export const MobileBtn = styled.div`
  display: none;
  width: 140px;
  padding: 20px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.defaultText};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  cursor: pointer;
  ${media.small} {
    display: block;
  }
`;
