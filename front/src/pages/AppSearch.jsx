import React from "react";
import styled from "styled-components";

//components import
import SearchBar from "../components/search/SearchBar";
import SearchList from "../components/search/list/SearchList";

import searchHeader from "../assets/img/searchHeader.png";
import colorLogo from "../assets/img/colorLogo.png";

const SHeaderDiv = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${searchHeader});
  background-repeat: no-repeat;
`;

const SMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
`;

const SP = styled.p`
  font-size: 20px;
  color: white;
`;

const SImg = styled.img`
  width: 272px;
  height: 75.75px;
  margin-bottom: 32px;
`;

const AppSearch = () => {
  const searchedWhisky = false;

  return (
    <>
      <SHeaderDiv>
        <SP style={{ fontSize: "32px", marginBottom: "0px", fontWeight: "bold" }}>
          나만의 위's키 백과
        </SP>
        <SP>이름을 통해 원하는 위스키를 검색하세요!</SP>
      </SHeaderDiv>
      <SMainDiv>
        <SImg src={colorLogo} alt="#" />
        <SearchBar />
        {searchedWhisky && <SearchList />}
      </SMainDiv>
    </>
  );
};

export default AppSearch;
