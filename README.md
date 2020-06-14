# World Recipes

This the repo for "Reddit World Recipes Around the World". You're probably here because you're interested in how this works.

## Technologies

### Front-end

- React
- NPM (and soon, Deno)
- TypeScript
- D3-Geo
- GeoJSON
- TopoJSON
- Reddit

### Infrastructure

- GitHub
- GitHub pages
- TravisCI

## Planned Features

- Random country/recipe
- Tags/Labels
- United States
- Suggestions
- Bar graph of votes
- Click/drag map
- Convert map to globe
- Mobile-friendliness

## Want to Contribute or See Something Wrong?

Leave me a message and we'll see where we can take things

### About the Dataset

The dataset for this web application is backed by this [Reddit thread](https://www.reddit.com/r/Cooking/comments/gu6xfh/nearly_every_suggestion_i_got_for_my_every/). If you have any suggestions, I am interested in hearing them and I'll try to add them in a future revision.

### Geopolitical Differences

I know this is a touchy subject, and it is not my intention to offend anyone, but I am going by data provided by TopoJSON and GeoJSON for the names of lands on the map. The simplest reason is because the dataset is providing the coordinate boundaries of the countries on the web app. For the sake of cuisine, I will try my best to respect and represent each group of food.

On a similar note, the geographic dataset in this application has some abbreviations. At some point in time, I'd like to resolve the naming strategy; however, for now, I will rely on the country names listed in the Topo/GeoJSON datasets.

#### Differences Between Reddit and Topo/GeoJSON

- Dominican Republic is abbreviated
- Democratic Republic of the Congo is abbreviated
- The collection of polities describing the United Kingdom will have to remain aggregated
  - In a future release, I will provide a mechanism to safely examine all of the regions in the UK with their individual recipes
  - These aggregated polities include: Ireland, Scotland, Wales, and England
- Czech Republic is listed as Czechia in the Topo/Geo dataset

The coordinate boundaries of the following political entities are not available or distinguished in the dataset (yet)

- The boundaries for French Guiana is part of the boundaries for France
- The boundaries for Hong Kong is part of the boundaries for China
- The boundaries for Singapore are not listed

## Resources

- [Taken from](https://github.com/zimrick/react-svg-maps-tutorial/blob/master/components/WorldMap.js)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Standard React Stuff

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
