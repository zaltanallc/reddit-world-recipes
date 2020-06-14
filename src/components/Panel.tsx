import React from "react";

import "./Panel.css";

const Panel = (props: {
  countryName: string | undefined;
  recipeNames: string[] | undefined;
}) => {
  return (
    <div className="panel">
      <div>
        <h2>Country</h2>
        <div className="country-name-container">
          <p className="country-name">{props.countryName}</p>
        </div>
        <h3>List of Recipes</h3>
        <ul>
          {!props.recipeNames || props.recipeNames.length === 0 ? (
            <p>Oops, no recipes found</p>
          ) : (
            props.recipeNames.map((recipeName, i) => (
              <li key={i}>{recipeName}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Panel;
