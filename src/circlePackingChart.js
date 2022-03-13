import React from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MyResponsiveCirclePackingCanvas = ({
  data /* see data tab */
}) => (
  <ResponsiveCirclePacking
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    id="Name"
    value="Score"
    colorBy="id"
    colors={{ scheme: "nivo" }}
    childColor={{ from: "color", modifiers: [["brighter", 0.4]] }}
    padding={4}
    enableLabels={true}
    labelsFilter={function (e) {
      return 2 === e.node.depth;
    }}
    labelsSkipRadius={10}
    labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.5]] }}
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "none",
        color: "inherit",
        rotation: -45,
        lineWidth: 5,
        spacing: 8
      }
    ]}
    fill={[{ match: { depth: 1 }, id: "lines" }]}
  />
);
