import { IUser } from "./IUser";

export interface CrudService<T> {
    create(input: IUser): Promise<T>
    update(input: IUser): Promise<T>
    delete(input: IUser): Promise<T>
}


export interface ReadDataService<T> {
    get(input: IUser): Promise<T>
    getByEmail(input: IUser): Promise<T>
    getById(input: IUser): Promise<T>
}