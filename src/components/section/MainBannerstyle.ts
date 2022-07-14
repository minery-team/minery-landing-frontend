import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 480px;
  overflow: hidden;
`;
export const BackGround = styled.img`
  position: absolute;
  height: 30rem;
  width: 100%;
  object-fit: cover;
  background-size: cover;
  overflow: hidden;
`;
export const PhoneImg = styled.img`
  position: relative;
  width: 40%;
  left: 60%;
  top: -8rem;
`;

export const Text = styled.span`
  position: relative;
  width: 607px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  left: 17%;
  top: 7.2rem;
`;

export const Tag = styled.span`
  display: flex;
  width: 300px;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export const Desc = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  p {
    margin-top: 20px;
  }
`;
