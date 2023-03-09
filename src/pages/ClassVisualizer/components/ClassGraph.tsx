import { useCallback } from "react";
import ForceGraph2D from "react-force-graph-2d";

export default function ClassGraph() {
  const myData = {
    nodes: [{ nodeId: "a" }, { nodeId: "b" }, { nodeId: "c" }],
    links: [
      { linkSource: "a", linkTarget: "b" },
      { linkSource: "c", linkTarget: "a" },
    ],
  };
  return <ForceGraph2D graphData={myData} />;
}
