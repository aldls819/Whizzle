import React from "react";
import styled from "styled-components";
import MyLevel from "./MyLevel";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/userStore";
import cameraIcon from "../../assets/img/camera.png";

const SImgContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 250px;
`;

const SCameraIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 30px;
  width: 30px;
  padding: 10px; // 원의 크기를 조절하는 데 사용되는 패딩
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transform: translate(-17px, -17px);
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5); // 그림자 추가
`;

const SImg = styled.img`
  height: 250px;
  filter: drop-shadow(0px 8px 24px rgba(149, 157, 165, 0.2));
  background-color: white;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5); // 그림자 추가

  border-radius: 999px;
`;

const SP = styled.p`
  font-size: 40px;
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 15px;
`;

const SInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  padding-left: 20px;
  margin-bottom: 50px;
  margin-left: 20px;
`;

const SMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

//마이페이지 상단 해당 유저의 기본 정보
const MyProfile = () => {
  const user = useRecoilValue(userState);

  return (
    <>
      <SMainDiv>
        <SImgContainer>
          <SImg src={`${user.image.url}`} alt={user.name} />
          <SCameraIcon src={cameraIcon} alt="Change Profile Picture" />
        </SImgContainer>
        <SInfoDiv>
          <SP>{user.nickname}</SP>
          <MyLevel level={user.level} max={100} />
        </SInfoDiv>
      </SMainDiv>
    </>
  );
};

export default MyProfile;
