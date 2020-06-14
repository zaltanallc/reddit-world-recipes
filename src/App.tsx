import React, { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
// import { Topology } from "topojson-specification";
import { Country } from "./models/Country";

function App() {
  const [recipeNames, setRecipeNames] = useState<string[]>();
  const [redditCountryList, setRedditCountryList] = useState<Country[]>();

  const handleCountryChange = (countryName: any) => {
    // console.log("App:", countryName);
    const recipes: string[] | undefined = redditCountryList
      ?.find((redditCountry) => redditCountry.name === countryName)
      ?.recipes.map((recipe) => recipe.name);
    setRecipeNames(recipes);
  };

  useEffect(() => {
    const promise1 = fetch("data/national-dish-of-your-country.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => {
      // Coerce into an array of Countries
      return data.json().then((jsonFormat) => {
        const countries: Country[] = jsonFormat;
        setRedditCountryList(countries);
        return countries.map((country) => country.name);
      });
    });

    const promise2 = fetch("data/world-110m.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => {
      // Coerce into an array of Countries
      return data.json().then((body) => {
        const topology = body;

        return topology.objects.countries.geometries.map(
          (geometry: any) => geometry.properties.name
        ) as string[];
      });
    });

    Promise.all([promise1, promise2]).then(([reddit, geo]) => {
      console.log("numFirst", reddit.length);
      console.log("numSecond", geo.length);
      const secondNotInFirst = geo.filter((g) => !reddit.includes(g));
      const firstNotInSecond = reddit.filter((r) => !geo.includes(r));

      console.log("firstNotInSecond", firstNotInSecond);
      console.log("secondNotInFirst", secondNotInFirst);
    });
  }, []);

  return (
    <div className="App">
      <Dashboard
        onCountryChange={handleCountryChange}
        recipeNames={recipeNames}
      />
    </div>
  );
}

export default App;
