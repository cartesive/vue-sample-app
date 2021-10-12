# Simple example of using Plotly in a Vue/Ripple app.

This is a simple example of using a data plot from a live data source in plotly.

## Intro

The data plot has been implemented as a stand-alone component, which could either be specialised for this specific use, or generalised by accepting a configurable data-source url and data-limit as parameters.

### Accessibility

The component includes an ARIA-labelled caption, which has a full-text description of the figure.

### Data retrieval

The data used in this example is [https://discover.data.vic.gov.au/dataset/victorian-coronavirus-data/resource/e3c72a49-6752-4158-82e6-116bea8f55c8](COVID cases by postcode), and we use the data-API to limit the results to the first 8 postcodes, which are inner-city postcodes.

**Note:** For production deployment, it may be wise to run a serverless task on a daily basis, to sweep the API json to a static CDN location. The data does not change very many times in 24 hours, so it makes sense to reduce the load on the upstream API by caching the latest json in this way.

### Testing

The default test was modified to ensure the component appears in the app successfully. This is only a 'smoke' test, and a detailed unit test would be required, with mock data, to fully test the component.

### Future improvements

Two error states should be added to the this 

## Technical  caveats

The node-sass and sass-loader libraries seem to be incompatible with the very latest version of node, and not able to be updated (due to the Acorn version dependency?):

```
nvm ls
->     v15.14.0 (7.7.6)
       v16.11.0 (8.0.0)
```

Use nvm to switch to v15.14.0 (7.7.6) if required.

## Project set up
```
yarn install
```
or
```
npm install
```

### Compiles and hot-reloads for development
```
yarn serve
```
or
```
npm run serve
```
