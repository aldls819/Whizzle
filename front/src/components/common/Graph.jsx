import React from "react";
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";

const SDiv = styled.div`
  width: 830px;
  height: 180px;
`;

const SContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Graph = (props) => {
  const flavorData = Object.entries(props.flavor).map(([x, y]) => ({ x, y }));
  const data = [
    {
      id: "drunkenbear",
      data: flavorData,
    },
  ];
  return (
    <SContainer>
      <SDiv>
        <ResponsiveLine
          data={data}
          curve="natural"
          colors={"#F84F5A"}
          theme={{
            // background: "#000000",
            textColor: "#777777",
            fontFamily: "Pretendard Variable",
            fontSize: "16px",
          }}
          margin={{ top: 25, right: 30, bottom: 60, left: 35 }}
          lineWidth={5}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 100,
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          s
          axisTop={null}
          axisRight={null}
          axisLeft={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 0,
            tickPadding: 30,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: "middle",
          }}
          pointSize={7}
          pointColor="#fff"
          pointBorderWidth={1}
          pointBorderColor="#F84F5A"
          pointLabelYOffset={-12}
          useMesh={false}
          enableGridX={false}
          enableGridY={false}
        />
      </SDiv>
    </SContainer>
  );
};

export default Graph;
