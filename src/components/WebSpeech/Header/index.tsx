import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

interface IHeader {
  name: string;
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Header = ({ name }: IHeader) => {
  return (
    <Wrapper>
      <Typography variant="h4" component="h2">
        {name}
      </Typography>
    </Wrapper>
  );
};
