import React, { FC } from "react";
import styles from "./style.module.css";
import { ITreeProps } from "../../Types/types";
import { TreeNode } from "./TreeNode";
import classNames from "classnames";

export const Tree: FC<ITreeProps> = ({ data }) => {
  return (
    <ul className={classNames(styles.treeContainer)}>
      {data && data.map(tree => <TreeNode node={tree} key={tree.id} />)}
    </ul>
  );
};
