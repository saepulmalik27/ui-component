import React from "react";
import { SectionContainer, CommonSection } from "./section.styled";

const Section = (props) => {
  return (
    <CommonSection>
      {props.decoration &&
        props.decoration.map((val, key) => {
          return (
            <div style={val.style} key={key}>
              <img src={val.url} alt="decoration" />
            </div>
          );
        })}
      <SectionContainer style={props.styled}>{props.children}</SectionContainer>
    </CommonSection>
  );
};

export default Section;
