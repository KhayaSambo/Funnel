import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
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
  fontSize: 14,
  dots: {
    text: {
      fill: "rgba(255,255,255,.9)"
    }
  }
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

export const MyResponsiveRadarCanvas = ({ data /* see data tab */ }) => (
  <ResponsiveRadar
    data={data}
    theme={chartTheme}
    keys={["Score"]}
    indexBy="Name"
    maxValue="auto"
    margin={{ top: 45, right: 15, bottom: 45, left: 15 }}
    curve="linearClosed"
    borderWidth={2}
    borderColor={{ from: "color" }}
    gridLevels={5}
    gridShape="circular"
    // gridLabel={LabelComponent}
    gridLabelOffset={20}
    enableDots={true}
    dotSize={32}
    dotColor="#2F6FAF"
    dotBorderWidth={2}
    dotBorderColor={{ from: "color" }}
    enableDotLabel={true}
    dotLabel="value"
    dotLabelYOffset={3}
    colors={{ scheme: "category10" }}
    fillOpacity={0.25}
    blendMode="multiply"
    animate={true}
    motionConfig="wobbly"
    isInteractive={true}
    // legends={[
    //   {
    //     anchor: "top-left",
    //     direction: "column",
    //     translateX: -50,
    //     translateY: -40,
    //     itemWidth: 80,
    //     itemHeight: 20,
    //     itemTextColor: "#999",
    //     symbolSize: 12,
    //     symbolShape: "circle",
    //     effects: [
    //       {
    //         on: "hover",
    //         style: {
    //           itemTextColor: "#000"
    //         }
    //       }
    //     ]
    //   }
    // ]}
  />
);
