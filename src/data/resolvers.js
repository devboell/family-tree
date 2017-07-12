import find from 'lodash/fp/find'
import artistData from './artists.json'

const resolvers = {

  Query: {
    artists: () => artistData,
    artistByPath: (_, args) =>
      find({ path: args.path })(artistData)
    ,
  },
}

export default resolvers
