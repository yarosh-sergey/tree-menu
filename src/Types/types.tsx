export interface INode {
  id: string,
  title: string;
  nodes?: Array<this>;
}

export interface ITreeProps {
  data: Array<INode> | undefined;
}

export interface ITreeNodeProps {
  node: INode;
}