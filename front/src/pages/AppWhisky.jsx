import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import colorLogo from "../assets/img/colorLogo.png";
import logo from "../assets/img/logo.png";
import favorite from "../assets/img/favorite.png";
import create from "../assets/img/create.png";
import styled from "styled-components";
import { whiskyDetail } from "../apis/whiskyDetail";

//import components
import WhiskyDetailInfo from "../components/whisky/WhiskyDetailInfo";
import WhiskyDetailReview from "../components/whisky/WhiskyDetailReview";
import WhiskySimilarList from "../components/whisky/WhiskySimilarList";
import Graph from "../components/common/Graph";

const SButton = styled.button`
  width: 63px;
  height: 63px;

  border-radius: 50%;
  border: none;

  background: #f84f5a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SButtonDiv = styled.div`
  position: sticky;
  left: 87vw;
  bottom: 50px;
  width: 63px;
  height: 120px;
`;

const SImg = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
`;

const SP = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const SContainer = styled.div`
  margin-top: 70px;
  max-width: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const AppWhisky = () => {
  // 페이지 mount시 네비게이션 바 이미지와 글씨 색 변경
  useEffect(() => {
    const navLogo = document.getElementById("logo");
    navLogo.src = colorLogo;
    const navTexts = document.getElementsByClassName("text");
    for (let i = 0; i < navTexts.length; i++) {
      navTexts[i].style.color = "#000000";
    }
    // 페이지 unmount시 원래대로 복구
    return () => {
      navLogo.src = logo;
      for (let i = 0; i < navTexts.length; i++) {
        navTexts[i].style.color = "#ffffff";
      }
    };
  }, []);

  const { id } = useParams();
  const [whisky, setWhisky] = useState(null);
  async function getWhiskyInfo(param) {
    try {
      console.log(param);
      const whiskyInfo = await whiskyDetail(param);
      console.log(whiskyInfo);
      setWhisky(whiskyInfo);
    } catch (error) {
      console.log("위스키 데이터 조회 실패");
    }
  }

  useEffect(() => {
    // 위스키 상세 조회 요청
    getWhiskyInfo(id);
    // 유사 위스키 목록 요청

    // 리뷰 목록 요청

    window.scrollTo(0, 0);
  }, [id]);

  // const exampleWhisky = {
  //   id: 1,
  //   name: "Glenfiddich 12 Year",
  //   image: {
  //     originalName: "Glenfiddich 12 Year.png",
  //     url: "assets/img/whisky_preset/1.png",
  //   },
  //   avg_rating: 3.36,
  //   review_count: 32,
  //   category: "Single Malt",
  //   location: "Speyside, Scotland",
  //   priceTier: 2,
  //   abv: 40,
  //   caskType: "American oak ex-bourbon, European oak ex-sherry",
  //   flavor: {
  //     smoky: 20,
  //     peaty: 10,
  //     spicy: 40,
  //     herbal: 30,
  //     oily: 30,
  //     body: 60,
  //     rich: 60,
  //     sweet: 60,
  //     salty: 20,
  //     vanilla: 70,
  //     tart: 50,
  //     fruity: 70,
  //     floral: 50,
  //   },
  // };

  const whiskystatistics = {
    age: 20,
    gender: "남성",
  };

  const whiskys = [
    {
      name: "Glenfiddich 12 Year",
      category: "Single Malt",
      location: "Speyside, Scotland",
      abv: "40",
      priceTier: 2,
      avg_rating: 3.36,
      total_rating: 5952,
      id: 1,
    },
    {
      name: "Glenlivet 12 Year Double Oak",
      category: "Single Malt",
      location: "Speyside, Scotland",
      abv: "40",
      priceTier: 2,
      avg_rating: 3.41,
      total_rating: 5811,
      id: 2,
    },
    {
      name: "Macallan 12 Year Sherry Oak Cask",
      category: "Single Malt",
      location: "Highlands, Scotland",
      abv: "43",
      priceTier: 3,
      avg_rating: 3.82,
      total_rating: 5442,
      id: 3,
    },
    {
      name: "Glenfiddich 12 Year",
      category: "Single Malt",
      location: "Speyside, Scotland",
      abv: "40",
      priceTier: 2,
      avg_rating: 3.36,
      total_rating: 5952,
      id: 4,
    },
    {
      name: "Glenlivet 12 Year Double Oak",
      category: "Single Malt",
      location: "Speyside, Scotland",
      abv: "40",
      priceTier: 2,
      avg_rating: 3.41,
      total_rating: 5811,
      id: 5,
    },
    {
      name: "Macallan 12 Year Sherry Oak Cask",
      category: "Single Malt",
      location: "Highlands, Scotland",
      abv: "43",
      priceTier: 3,
      avg_rating: 3.82,
      total_rating: 5442,
      id: 6,
    },
  ];

  return (
    <>
      <SContainer>
        {whisky && <WhiskyDetailInfo whisky={whisky} stat={whiskystatistics} />}
        <div style={{ width: "990px", marginBottom: "0px", marginTop: "30px" }}>
          <SP>이 위스키는 이런 맛을 가지고 있어요!</SP>
        </div>
        {whisky && <Graph flavor={whisky.flavor} />}
        <div style={{ width: "990px", marginBottom: "0px", marginTop: "90px" }}>
          <SP>이런 위스키는 어떠세요?</SP>
        </div>
        <WhiskySimilarList whiskys={whiskys} />
        <WhiskyDetailReview whisky={whisky} stat={whiskystatistics} />
        <SButtonDiv>
          <SButton style={{ marginBottom: "10px" }}>
            <SImg src={favorite} alt="keep" />
          </SButton>
          <SButton>
            <SImg src={create} alt="create" />
          </SButton>
        </SButtonDiv>
      </SContainer>
    </>
  );
};

export default AppWhisky;
