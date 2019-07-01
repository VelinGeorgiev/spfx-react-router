## react-router-dom

This sample shows how basic router capability can be implemented in a SPFx React web part giving the web part single-page app (SPA) capabilies. It is using tiny and very effective JavaScript library named Navigo since the most popular routing library for react react-router-dom had some issues when combined with the SharePoint Framework while I was testing the concept. 

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
