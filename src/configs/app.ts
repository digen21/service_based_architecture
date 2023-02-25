import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import { resolvers } from "../graphql/user/resolvers";
import { userTypes as typeDefs } from "../graphql/user/typedefs";

export const startApp = async (app: Express) => {

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    return server.applyMiddleware({ app });
}