import { ApolloClient, InMemoryCache, HttpLink, split, ApolloLink } from '@apollo/client'

import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from '@apollo/client/utilities'

let wsLink = new WebSocketLink({
  uri: 'wss://localhost:5001/g',
  options: {
    reconnect: true
  }
})

let httpLink = new HttpLink({
  uri: 'https://localhost:5001/g'
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink as unknown as ApolloLink,
  httpLink
)

export default new ApolloClient({
  uri: '',
  link: link,
  cache: new InMemoryCache()
})
