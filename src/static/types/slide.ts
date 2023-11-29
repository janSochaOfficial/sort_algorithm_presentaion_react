import { visualizerProps } from "../../components/visualizer";

export type slideData = {
  title: string;
  content: string;
  visualizer: boolean;
  visualizerProps?: visualizerProps;
  code?: boolean;
  codeValue?: string;
};
