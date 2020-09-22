import { ReactNode } from "react";

export interface ModuleObject {
  name: string;
  url: string;
  component: React.FC;
  children?: ModuleObject[];
  haveAdd?: boolean;
}

export interface PortfolioProps {
  name: string;
  url: string;
  description: string;
}
