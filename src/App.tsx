import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Tree } from "./components/Tree/Tree";
import { INode } from "./Types/types";

function App() {
  const [treeList, setTreeList] = useState<Array<INode>>();

  useEffect(() => {
    getTree();
  }, []);

  async function getTree() {
    try {
      const response = await axios.get("tree.json");
      setTreeList(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div className="App">
      <h2>Tree Menu</h2>
      <Tree data={treeList} />
    </div>
  );
}

export default App;
