import styled from "styled-components";
import media from "src/styles/media";

export const styledButton = styled.div`
  display: flex;
  align-items: center;
  width: 152px;
  height: 24px;
  justify-content: center;
  background-color: #232323;
  border-radius: 21px;
  padding: 20px;
  margin-right: 16px;
  cursor: pointer;

  div {
    height: 16px;
    width: 16px;
    margin-bottom: 4px;
    img {
      width: inherit;
      object-fit: cover;
    }
  }
  span {
    color: #fff;
    margin-left: 10px;
  }
`;

export const StoreWrapper = styled.div`
  display: flex;
  margin-top: 48px;
  ${media.small} {
    display: none;
  }
`;
