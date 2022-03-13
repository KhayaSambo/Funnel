import React from "react";
import "./styles.css";
import { useSpring, animated } from "react-spring";
import { useTheme, useMotionConfig } from "@nivo/core";

export const PartLabel = ({ part }) => {
  const theme = useTheme();
  const { animate, config: motionConfig } = useMotionConfig();

  const animatedProps = useSpring({
    transform: `translate(${part.x}, ${part.y})`,
    color: part.labelColor,
    config: motionConfig,
    immediate: !animate
  });

  return (
    <animated.g transform={animatedProps.transform}>
      <animated.text
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          ...theme.labels.text,
          fill: animatedProps.color,
          pointerEvents: "none"
        }}
      >
        {part.data.value + ": " + part.data.label}
      </animated.text>
    </animated.g>
  );
};
