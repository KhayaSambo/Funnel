import React from "react";
import ReactDOM from "react-dom";

import { MyResponsiveTreeMapCanvas } from "./treeMapChart";
import treeMapData from "./treeMapData";

import { MyResponsiveFunnelCanvas } from "./funnelChart";
import funnelData from "./funnelData";

import { MyResponsiveSunburstCanvas } from "./sunburstChart";
import sunburstProductData from "./sunburstProductData";
import sunburstChannelData from "./sunburstChannelData";

import { MyResponsiveRadarCanvas } from "./radarChart";
import radarData from "./radarData";

import { MyResponsiveBulletChart } from "./bulltetChart";
import bulletData from "./bulletData";

import { MyResponsiveCirclePackingCanvas } from "./circlePackingChart";
import circlePackingData from "./circlePackingData";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyResponsiveFunnelCanvas data={funnelData} />
      {/* <MyResponsiveSunburstCanvas data={sunburstProductData} />
      <MyResponsiveSunburstCanvas data={sunburstChannelData} />
      <MyResponsiveTreeMapCanvas data={treeMapData} />
      <MyResponsiveRadarCanvas data={radarData} />
      <MyResponsiveBulletChart data={bulletData} />
      <MyResponsiveCirclePackingCanvas data={circlePackingData} /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
