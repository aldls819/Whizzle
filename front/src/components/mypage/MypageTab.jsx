import React, { useState } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

//import component
import MyKeep from "./MyKeep";
import MyReivew from "./MyReivew";

const STabList = styled(TabList)`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  list-style: none;
  border-bottom: 3px solid #ccc;
`;

const STab = styled(Tab)`
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 10px;

  &[aria-selected="true"] {
    border-bottom: 3px solid #f84f5a;
    font-weight: bold;
  }

  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
  }
`;

const MypageTab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
        <STabList>
          <STab>킵한 위스키</STab>
          <STab>작성한 리뷰</STab>
        </STabList>
        <TabPanel>
          <MyKeep />
        </TabPanel>
        <TabPanel>
          <MyReivew />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default MypageTab;
