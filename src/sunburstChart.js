import React from "react";
import {
  ComputedDatum,
  ResponsiveSunburst,
  SunburstCustomLayerProps
} from "@nivo/sunburst";
import { animated } from "react-spring";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const customPalette = [
  "#2EAD61",
  "#2f6faf",
  "#fa8775",
  "#ea5f94",
  "#cd34b5",
  "#9d02d7",
  "#0000ff"
];
const chartTheme = {
  background: "#ffffff",
  textColor: "#333333",
  fontSize: 14
};
const CenteredMetric = ({ nodes, centerX, centerY }) => {
  const total = nodes.reduce((total, datum) => total + datum.value / 2, 0);

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "42px",
        fontWeight: 600
      }}
    >
      {total}
    </text>
  );
};

const arcLabels = ({ datum, label, style }) => {
  return (
    <animated.g transform={style.transform} style={{ pointerEvents: "none" }}>
      <text
        textAnchor="middle"
        dominantBaseline="left"
        fill={style.textColor}
        style={{
          fontSize: 14,
          fontWeight: 600,
          textShadow: "0.25px 0.25px 4px #ffffff"
        }}
      >
        {datum.id}
      </text>
    </animated.g>
  );
};

export const MyResponsiveSunburstCanvas = ({ data /* see data tab */ }) => (
  <ResponsiveSunburst
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    id="name"
    value="loc"
    theme={chartTheme}
    cornerRadius={2}
    borderColor="darkgray"
    colors={customPalette}
    inheritColorFromParent={false}
    childColor={{ from: "color", modifiers: [["brighter", 0.7]] }}
    enableArcLabels={true}
    arcLabel={(d) => d.id + " (" + d.value + ") "}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 3]] }}
    layers={["arcs", "arcLabels", CenteredMetric]}
    arcLabelsComponent={arcLabels}
  />
);
