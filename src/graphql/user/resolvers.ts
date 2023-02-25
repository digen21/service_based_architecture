import { ApolloError } from "apollo-error";
import UserService from "../../services/User/UserService";
import { IUser } from "../../interfaces/IUser";


export const resolvers = {
    Query: {
    },

    Mutation: {
        login: async (_: any, { input }: { input: IUser }) => {
            const { email, password } = input
            const userService = new UserService();
        }
    }
}