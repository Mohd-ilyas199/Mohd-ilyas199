import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { L1 } from "./SectionI/L1";
import { L2 } from "./SectionII/L2";
export const Taskmanager = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="SectionI">
          <h1>L1</h1>
          <L1 />
        </Tab>
        <Tab eventKey="profile" title="SectionII">
          <h2>L2</h2>
          <L2 />
        </Tab>
        <Tab eventKey="contact" title="SectionIII">
          tab 3
        </Tab>
      </Tabs>
    </div>
  );
};
