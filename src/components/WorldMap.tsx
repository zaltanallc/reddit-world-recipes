import React, { useEffect, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { Topology } from "topojson-specification";
import { feature } from "topojson-client";
import {
  Geometry,
  Feature,
  FeatureCollection,
  GeoJsonProperties,
} from "geojson";

import "./WorldMap.css";

import Country from "./Country";

/*
  WorldAtlas has the following schema:
  * objects:
    * countries (GeometryCollection)
      * geometries: Collection<Polygon | MultiPolygon>
    * land (GeometryCollection)
      * geometries: Collection<Polygon | MultiPolygon>
  * arcs: number[][][]
  * bbox: number[]
  * transform
    * scale: number[]
    * translate: number[]
*/

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2]);

const WorldMap = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [geographies, setGeographies] = useState<
    Feature<Geometry, GeoJsonProperties>[]
  >();

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        fetch("data/world-110m.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((response) => {
          // const data = response.json();
          response.json().then((body) => {
            console.log("body", body);

            const topology: Topology = (body as unknown) as Topology;

            const features = feature(
              topology,
              topology.objects.countries
            ) as FeatureCollection<Geometry, GeoJsonProperties>;

            if (features) !didCancel && setGeographies(features.features);
          });
        });
      } catch (error) {
        console.warn(error);
      } finally {
        !didCancel && setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      didCancel = true;
    }; // cleans up state after component is destroyed
  }, []); // empty array argument ensures that useEffect only fires when component mounts; second argument tells when to re-update

  // Event handler for when Country emits a focus event (click or mouseover)
  const handleCountryChange = (countryId: any) => {
    console.log("WorldMap Country Change: ", countryId);

    // bubble up to the Dashboard
    props.onCountryChange(countryId);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <svg width={800} height={450} viewBox="0 0 800 450">
      <g className="countries">
        {!geographies
          ? "Loading data..."
          : geographies.map((d, i, a) => (
              <Country
                key={i}
                d={geoPath().projection(projection)(d)}
                i={i}
                onCountryChange={handleCountryChange}
              />
            ))}
      </g>
    </svg>
  );
};

export default WorldMap;
