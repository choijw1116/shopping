import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Header from "../pages/src/components/header";
import Footer from "../pages/src/components/footer";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: cover; */

  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url("/images/background.jpeg");
`;

const Buttons = styled.div`
display: flex;
flex-direction: column;
padding-left: 10rem;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      <Column>
        <Section>
          {/* <div>
            <img src="/images/shoppingimg1.jpeg" />
            <h4>Zelda handmade coat</h4>
            <span>123123won</span>
          </div>
          <div>
            <img src="/images/shoppingimg1.jpeg" />
            <h4>Zelda handmade coat</h4>
            <span>123123won</span>
          </div>
          <div>
            <img src="/images/shoppingimg1.jpeg" />
            <h4>Zelda handmade coat</h4>
            <span>123123won</span>
          </div> */}
          <Buttons>
            <button>전체보기</button>
            <button>Collection보기</button>
          </Buttons>
        </Section>
      </Column>

      <Footer />
    </div>
  );
};

export default Home;
