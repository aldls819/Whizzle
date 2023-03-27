import React from "react";
import styled from "styled-components";

const SWrapper = styled.div`
  display: flex;
  height: 20px;
  width: 570px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #dfdfdf;
`;

const SProgress = styled.div`
  background-image: linear-gradient(to right, #f84f5a, #f6cb5a);
  background-size: ${(props) => props.width}% 100%;
  background-repeat: no-repeat;
  border-radius: 999px;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const SRemaining = styled.div`
  background-color: #dfdfdf;
  height: 100%;
  // border-radius: 0px 10px 10px 0px;
`;

const STitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 570px;
  margin-bottom: 10px;
`;

const SP = styled.p`
  font-size: 20px;
  margin: 0;
`;

const SLevelP = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #f84f5a;
  margin: 0;
`;

const MyLevel = (props) => {
  const { level, max } = props;

  const levelPercent = Math.min(Math.max((level / max) * 100, 0), 100);
  return (
    <>
      <div style={{ paddingRight: "23px" }}>
        <STitleDiv>
          <SP>나의 도수</SP>
          <SLevelP>{level}%</SLevelP>
        </STitleDiv>
        <SWrapper>
          <SProgress style={{ width: `${levelPercent}%` }} />
          <SRemaining style={{ width: `${100 - levelPercent}%` }} />
        </SWrapper>
      </div>
    </>
  );
};

export default MyLevel;
