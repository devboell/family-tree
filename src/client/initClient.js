import { ApolloClient, createNetworkInterface } from 'react-apollo'


export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
    opts: {
      credentials: 'same-origin',
      // Pass headers here if your graphql server requires them
    },
  }),
})
