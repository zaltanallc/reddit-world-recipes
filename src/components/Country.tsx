import React, { useState } from "react";

/**
 * Encapsulates a portion of the UI. It gets its properties from the parent Map, and it emits
 * a click event back to the parent.
 * Props come from World Map
 */
const Country = (props: {
  onCountryChange: (arg0: any) => void;
  i: number;
  d: any;
  options: any;
}) => {
  // Use the `useState` hook to store local state
  const [hovered, setHovered] = useState(false);

  const handleCountryClick = () => {
    props.onCountryChange(props.options.properties.name);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    props.onCountryChange(props.options.properties.name);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // console.log(`${props.i} ${props.d}`);
  // console.log(`${JSON.stringify(props.options)}`);
  // console.log(`${props.options.id} ${props.options.properties.name}`);

  return (
    <path
      key={`path-${props.i}`}
      d={props.d}
      fill={hovered ? "red" : "rgb(67.8, 84.7, 90.2)"}
      stroke={hovered ? "red" : "#FFFFFF"}
      strokeWidth={1}
      onClick={handleCountryClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Country;
