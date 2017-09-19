### Family tree

An example app that lets you create a family tree, in this case a historical royal dynasty, the Plantagenets.
Demo: https://family-tree-example.herokuapp.com/

The main theme of this app is recursion. The SQL model is hierarchical, and a CTE is used to query family tree data. The family tree graph is displayed by (vanilla) SVG elements wrapped in nested (recursive) React components.


This app uses:
- React
- Redux
- Apollo
- GraphQL
- graphql-server
- ReactRouter
- ReduxForm
- SVG
- Knex/SQL
- CTE (Common Table Expression)
