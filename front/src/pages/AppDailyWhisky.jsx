import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DailyFlavor from "../components/daily/DailyFlavor";
import DailyPrice from "../components/daily/DailyPrice";
import DailyResult from "../components/daily/DailyResult";

const SHeaderDiv = styled.div`
  max-width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(90deg, #f84f5a 28.12%, #f7875a 65.62%, #f7cb5a 100%);
`;

const SP = styled.p`
  font-size: 20px;
  color: white;
`;

const SMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 300px);
`;

const SHr = styled.hr`
  border: 0.1px solid #d8d8d8;
  min-width: 900px;
`;
//데일리추천페이지
const AppDailyWhisky = () => {
  const [flavorData, setFlavorData] = useState({
    smoky: 0,
    peaty: 0,
    spicy: 0,
    herbal: 0,
    oily: 0,
    body: 0,
    rich: 0,
    sweet: 0,
    salty: 0,
    vanilla: 0,
    tart: 0,
    fruity: 0,
    floral: 0,
  });

  const [priceData, setPriceData] = useState("1");

  const body = {
    price: priceData,
    flavor: flavorData,
  };

  useEffect(() => {
    // axios 들어갈 자리
    // console.log(body);
  }, [flavorData, priceData]);

  return (
    <>
      <SHeaderDiv>
        <SP style={{ fontSize: "32px", marginBottom: "0px", fontWeight: "bold" }}>
          데일리 위스키 추천
        </SP>
        <SP>
          특별한 오늘, 새로운 위스키가 필요하다면?
          <br />
          태그 검색을 통해 평소와 다른 위스키를 추천받을 수 있어요!
        </SP>
      </SHeaderDiv>
      <SMainDiv>
        <DailyPrice priceData={priceData} setPriceData={setPriceData} />
        <DailyFlavor flavorData={flavorData} setFlavorData={setFlavorData} />
        <SHr />
        <DailyResult />
      </SMainDiv>
    </>
  );
};

export default AppDailyWhisky;
