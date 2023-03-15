import React from "react";
import { useRecoilState } from "recoil";
import { preference } from "../../../store/preferenceStore";
import styled from "styled-components";
import checkImg from "../../../assets/img/check.png";
import wonderImg from "../../../assets/img/wonder.png";
import cheersImg from "../../../assets/img/cheers.png";
import navigateNext from "../../../assets/img/navigate_next.png";
import navigatePrev from "../../../assets/img/navigate_prev.png";

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    125.02deg,
    #f84f5a 28.12%,
    #f7875a 65.62%,
    #f7cb5a 100%
  );
`;

const SCentered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  gap: 30px;
`;

const STitle = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

const SRadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  &:checked + label {
    background-color: #00a3ff;
    border: 1px solid #00a3ff;
    transition: 0.5s;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const SRadioLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  width: 437px;
  height: 398px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  color: white;
  font-size: 20px;
  transition: 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SNavigate = styled.div`
  cursor: pointer;
  position: fixed;
`;

//추천 세번째 질문 -> 위스키를 마셔봤는지에 대해 물어봄
const QuestionExperience = (props) => {
  const [preferenceValue, setPreferenceValue] = useRecoilState(preference);

  const isExperienceSelectHandler = (event) => {
    const selectedValue = event.target.value;
    setPreferenceValue((prev) => ({
      ...prev,
      isExperience: selectedValue,
    }));

    if (selectedValue === "true") {
      props.setActivePage(4);
    } else if (selectedValue === "false") {
      props.setActivePage(5);
    }
  };

  const nextPageHandler = () => {
    if (preferenceValue.isExperience === "true") {
      props.setActivePage(4);
    } else if (preferenceValue.isExperience === "false") {
      props.setActivePage(5);
    } else {
      alert("해당되는 내용을 선택해주세요!");
    }
  };

  return (
    <SDiv>
      <STitle>위스키에 대해 어느정도 알고 계신가요?</STitle>
      <SCentered>
        <SRadioInput
          id="false"
          type="radio"
          value="false"
          checked={preferenceValue.isExperience === "false"}
          onChange={isExperienceSelectHandler}
        />
        <SRadioLabel htmlFor="false">
          <img
            src={checkImg}
            alt="check"
            style={{ marginRight: "auto", marginLeft: "20px" }}
          />
          <span style={{ fontWeight: "bold", marginTop: "30px" }}>
            위스키가 뭐징?
          </span>
          <span>위스키에 대해 잘 알지 못해요</span>
          <img
            src={wonderImg}
            alt="wonder"
            style={{
              marginTop: "15px",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          />
        </SRadioLabel>
        <SRadioInput
          id="true"
          type="radio"
          value="true"
          checked={preferenceValue.isExperience === "true"}
          onChange={isExperienceSelectHandler}
        />
        <SRadioLabel htmlFor="true">
          <img
            src={checkImg}
            alt="check"
            style={{ marginRight: "auto", marginLeft: "20px" }}
          />
          <span style={{ fontWeight: "bold", marginTop: "20px" }}>
            위스키를 즐기는 편이에요!
          </span>
          <span>내가 좋아하는 위스키의 종류를</span>
          <span>이야기할 수 있어요</span>
          <img
            src={cheersImg}
            alt="wonder"
            style={{
              marginTop: "20px",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          />
        </SRadioLabel>
      </SCentered>
      <SNavigate onClick={props.goPriorPage} style={{ left: "1%" }}>
        <img src={navigatePrev} alt="navigate" />
      </SNavigate>
      <SNavigate onClick={nextPageHandler} style={{ right: "1%" }}>
        <img src={navigateNext} alt="navigate" />
      </SNavigate>
    </SDiv>
  );
};

export default QuestionExperience;
