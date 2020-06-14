import React, { useState } from "react";
import WorldMap from "./WorldMap";
import Panel from "./Panel";

import "./Dashboard.css";

/*
  The Dashboard is the outer-most level of the web application.
  The Dashboard contains:
  * A Map
  * A Search Bar
  * A Panel showing the list of recipes for the selected country
  * A Panel which lets the user toggle between lists of data
*/

const Dashboard = (props: {
  onCountryChange: (arg: any) => void;
  recipeNames: string[] | undefined;
}) => {
  const [countryName, setCountryName] = useState<string>();

  const handleCountryChange = (countryName: any) => {
    // console.log("Country change in Dashboard: ", countryId);
    props.onCountryChange(countryName);
    setCountryName(countryName);
  };

  return (
    <div className="dashboard">
      <Panel countryName={countryName} recipeNames={props.recipeNames} />
      <WorldMap onCountryChange={handleCountryChange} />
    </div>
  );
};

export default Dashboard;
