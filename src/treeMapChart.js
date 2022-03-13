import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const chartTheme = {
  background: "#ffffff",
  textColor: "#333333",
  fontSize: 12
};

const LabelComponent = ({ id, anchor }) => (
  <g
    transform={`translate(${
      anchor === "end" ? -60 : anchor === "middle" ? -30 : 0
    }, -20)`}
  >
    <text>{id}</text>
    <text
      y={24}
      style={{
        fontSize: 24,
        fontWeight: "bold",
        fill: "#3a9896"
      }}
    >
      {/*Math.round(Math.random() * 100)*/}
    </text>
  </g>
);

export const MyResponsiveTreeMapCanvas = ({ data /* see data tab */ }) => (
  <ResponsiveTreeMap
    data={data}
    theme={chartTheme}
    identity="name"
    value="score"
    valueFormat=".02s"
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    label={(d) => d.id + " (" + d.value + ") "}
    enableParentLabel={true}
    labelSkipSize={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 3]] }}
    parentLabelTextColor={{ from: "color", modifiers: [["darker", 3]] }}
    borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
  />
);
