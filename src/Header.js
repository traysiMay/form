import React from "react";
import raptor from "./raptoricon.png";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  width: 100px;
`;

const Header = () => {
  return (
    <div style={{ display: "block", margin: "auto" }}>
      <Container>
        <Image src={raptor}></Image>
        GUILD APPLICATION
      </Container>
    </div>
  );
};

export default Header;
