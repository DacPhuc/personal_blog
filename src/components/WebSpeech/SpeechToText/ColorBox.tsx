import React from "react";
import styled from "styled-components";

interface ColorCode {
  code: string;
}

const Wrapper = styled.div`
  width: 100px;
  background-color: ${(props: { code: string }) =>
    props.code ? props.code : "red"};
  margin: 2px;
  text-align: center;
  font-weight: 500;
`;

export const ColorBox = ({ code }: ColorCode) => {
  return <Wrapper code={code}>{code}</Wrapper>;
};
