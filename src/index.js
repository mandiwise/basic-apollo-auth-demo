import { ApolloServer } from "apollo-server-express";
import express from "express";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const port = 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
});
