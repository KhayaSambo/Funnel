import React from "react";
import { ResponsiveFunnel } from "@nivo/funnel";
import { PartLabel } from "./partLabel";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function Labels(props) {
  console.log(props);

  return props.parts.map((part) => (
    <PartLabel key={part.data.id} part={part} />
  ));
}

export const MyResponsiveFunnelCanvas = ({ data /* see data tab */ }) => (
  <ResponsiveFunnel
    data={data}
    margin={{ top: 20, right: 2, bottom: 20, left: 2 }}
    valueFormat="0d"
    interpolation="linear"
    colors={{ scheme: "spectral" }}
    borderWidth={20}
    layers={["separators", "parts", Labels, "annotations"]}
    labelColor={{ from: "color", modifiers: [["darker", 3]] }}
    beforeSeparatorLength={20}
    beforeSeparatorOffset={1}
    afterSeparatorLength={20}
    afterSeparatorOffset={1}
    currentPartSizeExtension={10}
    currentBorderWidth={40}
    motionConfig="wobbly"
  />
);
