import jwt from 'jsonwebtoken';
import { IUser } from '../../interfaces/IUser';
import UserService from '../../services/User/UserService';
import bcrypt from 'bcrypt';


export const login = async (input: IUser) => {
    try {
        const userService = new UserService();
        // const password = input.password;
        // const user = await userService.getByEmail(input);

    } catch (error) {
        console.log(error);
    }
}