import { Model } from 'mongoose';
export interface IUser {
    _id: string;
    firstName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserMethods {
    matchPassword(enteredPassword: string): Promise<boolean>;
}
export type UserModel = Model<IUser, {}, IUserMethods>;
export interface JwtPayload {
    id: string;
    iat: number;
    exp: number;
}
export interface UserResponse {
    _id: string;
    firstName: string;
    email: string;
    userToken?: string;
}
export interface RegisterBody {
    firstName: string;
    email: string;
    password: string;
}
export interface LoginBody {
    email: string;
    password: string;
}
//# sourceMappingURL=index.d.ts.map