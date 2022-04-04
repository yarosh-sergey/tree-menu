import React, { useState, FC } from "react";
import styles from "./style.module.css";
import arrowPNG from "../../assets/img/arrow.png";
import { ITreeNodeProps } from "../../Types/types";
import { Tree } from "./Tree";
import classNames from "classnames";

export const TreeNode: FC<ITreeNodeProps> = ({ node }) => {
  const [childVisible, setChildVisible] = useState<boolean>(false);

  const hasChild: boolean = node.nodes ? true : false;

  const clickNodeHandler = () => {
    hasChild && setChildVisible(!childVisible);
  };

  return (
    <li className={classNames(styles.treeNode)}>
      <div className={classNames(styles.row)} onClick={clickNodeHandler}>
        {hasChild && (
          <div
            className={classNames(
              styles.treeToggler,
              childVisible ? styles.active : ""
            )}
          >
            <img src={arrowPNG} alt="arrow" />
          </div>
        )}
        <div>{node.title}</div>
      </div>

      {hasChild && childVisible && <Tree data={node.nodes} />}
    </li>
  );
};
