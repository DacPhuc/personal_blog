import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BlankLayout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default BlankLayout;
