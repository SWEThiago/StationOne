import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl54ggd8036cf01ui9qdq54va/master',
  cache: new InMemoryCache()
})