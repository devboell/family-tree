### Apollo boilerplate, with example



This is not meant to be a full-blown, production-ready boilerplate. Rather, I wanted to see if I could put together a decent basic boiler using the latest tools and libs. That said, it does work, and it can serve as a starting point for someone who wants to extend or customize it further. It can also be handy for people who want to play around with Apollo.

Live demo of the example app: https://apollo-bp.herokuapp.com

This boilerplate uses:

- webpack 2
- React
- Redux
- react-hot-loader v-3
- react-router v-4
- Apollo client / react-apollo
- Apollo server /graphql-server-express
- graphql
- styled-components
- jest / jest snapshots
- support for static images and images imported as a module
- enzyme
- development, test and production modes
- babel, preset-env
- eslint, airbnb
- module resolving (no long `'../../../myFile'` import paths)

To remove the example app:
- empty `src/client/components` and `src/client/containers` folders.
- empty `src/client/images`.
- the `src/client/main.js` now specifies `components/App` as the root component. Modify that to have it point to your own root component.
- in `src/client/reducers.js` remove the `gallery` reducer
- in `src/data`, empty the `test` folder, remove `artists.json`, and remove the contents of `resolvers.js` and `schema.js`
