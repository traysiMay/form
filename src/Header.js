import React from "react";
import raptor from "./raptoricon.png";
import styled from "styled-components";

const Wrap = styled.div`
  display: block;
  width: 80%;
  margin: auto;
  border: 0.3rem solid white;
  margin: 1rem auto;
`;

const Container = styled.div`
  text-align: center;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 9px 10px #fbefef;
  text-shadow: 5px 3px #9d8f8f;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  width: 100px;
`;

const Header = () => {
  return (
    <Wrap>
      <Container>
        <Image src={raptor}></Image>
        GUILD APPLICATION
      </Container>
    </Wrap>
  );
};

export default Header;
