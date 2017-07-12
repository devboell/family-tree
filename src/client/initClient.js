import { ApolloClient, createNetworkInterface } from 'react-apollo'


export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
    opts: {
      credentials: 'same-origin',
      // Pass headers here if your graphql server requires them
    },
  }),
})
