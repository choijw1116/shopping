import type { NextPage } from "next";
import Image from "next/image";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  height: 70px;
  display: flex;
  flex: 1;
  padding: 0 20px 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;

  > span {
    padding-right: 20px;
  }
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  left: 0;
  > span {
    padding-right: 20px;
  }
  > span:last-child {
    padding-right: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </FooterLeft>
      <FooterRight>
        <span>About</span>
        <span>Contact</span>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
