import { IUser } from "./IUser";

export interface CrudService<T> {
    create(input: T): Promise<T>
    update(id: string, input: T): Promise<T>
    delete(id: string): Promise<string>
    getByProperty(input: string): Promise<T>
}


export interface ReadDataService<T> {
    get(input: IUser): Promise<T>
    getByEmail(input: IUser): Promise<T>
    getById(input: IUser): Promise<T>
}