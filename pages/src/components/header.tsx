import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  height: 70px;
  display: flex;
  flex: 1;
  padding: 0 20px 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h2 {
    padding-right: 20px;
  }
  > span {
    padding-right: 20px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  left: 0;
  > span {
    padding-right: 20px;
  }
  > span:last-child {
    padding-right: 0;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <h2>SHOPPING</h2>
        <span>About</span>
        <span>Collection</span>
        <span>전체보기</span>
      </HeaderLeft>
      <HeaderRight>
        <span>Event</span>
        <span>Login</span>
        <span>Bag</span>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
