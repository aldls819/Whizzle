import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import diaryImg from "../../assets/img/main_diary.png";

const SDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SContent = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
`;

const SLight = styled.span`
  text-align: left;
  font-family: GmarketSansLight;
  font-size: 4.5vh;
  letter-spacing: -2px;
  padding-left: 10px;
`;

const SStrong = styled.span`
  font-family: GmarketSansBold;
  font-size: 4.5vh;
  letter-spacing: -2px;
  padding-left: 10px;
`;

//메인화면에 띄워줄 다이어리
const MainDiary = (props) => {
  return (
    <SDiv>
      <SContent>
        <motion.div
          variants={props.variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SLight>위스키 한잔에 담아보는 오늘의 기억</SLight>
          <br />
          <SStrong>
            <span style={{ color: "#F84F5A" }}>기억을 기록하다,</span> 위스키 다이어리
          </SStrong>
        </motion.div>
        <motion.div
          variants={props.variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={diaryImg} alt="diary.png" style={{ marginTop: "10px", width: "120vh" }} />
        </motion.div>
      </SContent>
    </SDiv>
  );
};

export default MainDiary;
