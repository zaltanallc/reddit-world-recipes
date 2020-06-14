import React from "react";
import WorldMap from "./WorldMap";

/*
  The Dashboard is the outer-most level of the web application.
  The Dashboard contains:
  * A Map
  * A Search Bar
  * A Panel showing the list of recipes for the selected country
  * A Panel which lets the user toggle between lists of data
*/

const Dashboard = () => {
  const handleCountryChange = (countryId: any) => {
    console.log("Country change in Dashboard: ", countryId);
  };

  return (
    <div className="dashboard">
      <WorldMap onCountryChange={handleCountryChange} />
    </div>
  );
};

export default Dashboard;
