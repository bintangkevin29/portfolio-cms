import { ReactNode } from "react";

export interface ModuleObject {
  name: string;
  url: string;
  component: React.FC;
  children?: ModuleObject[];
}

export interface PortfolioProps extends DocumentData{
  name: string;
  url: string;
  description: string;
}
