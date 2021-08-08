import React from 'react';
import {View} from 'react-native';
import Svg, {
  Defs,
  G,
  Line,
  LinearGradient,
  Stop,
  Circle,
} from 'react-native-svg';

export default function Ticksvgscreen() {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/1999/xlink"
        width="105"
        height="105"
        viewBox="0 0 105 105">
        <Defs>
          <LinearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox">
            <Stop offset="0" stopColor="#0a7c40" />
            <Stop offset="1" stopColor="#053e1f" />
          </LinearGradient>
        </Defs>
        <G
          id="Group_294"
          data-name="Group 294"
          transform="translate(-155 -231)">
          <G id="Group_293" data-name="Group 293">
            <Circle
              id="Ellipse_103"
              data-name="Ellipse 103"
              cx="52.5"
              cy="52.5"
              r="52.5"
              transform="translate(155 231)"
              fill="url(#linear-gradient)"
            />
          </G>
          <G
            id="Group_278"
            data-name="Group 278"
            transform="translate(-815.24 -1226.766)">
            <G
              id="Group_277"
              data-name="Group 277"
              transform="translate(1000.24 1495.286)">
              <Line
                id="Line_37"
                dataName="Line 37"
                x2="14.136"
                y2="14.136"
                transform="translate(0 15.825)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="12"
              />
              <Line
                id="Line_38"
                dataName="Line 38"
                y1="29.961"
                x2="30.653"
                transform="translate(14.136)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="12"
              />
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
}
