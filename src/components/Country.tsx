import React, { useState } from "react";

/**
 * Encapsulates a portion of the UI. It gets its properties from the parent Map, and it emits
 * a click event back to the parent.
 * Props come from World Map
 */
const Country = (props: {
  onCountryChange: (arg0: any) => void;
  i: any;
  d: any;
}) => {
  // Use the `useState` hook to store local state
  const [hovered, setHovered] = useState(false);

  const handleCountryClick = (countryIndex: any) => {
    console.log("Clicked on country index: ", countryIndex);
    props.onCountryChange(props.i);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    props.onCountryChange(props.i);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <path
      key={`path-${props.i}`}
      d={props.d}
      fill={hovered ? "red" : "rgb(67.8, 84.7, 90.2)"}
      stroke={hovered ? "red" : "#FFFFFF"}
      strokeWidth={1}
      onClick={() => handleCountryClick(props.i)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Country;
