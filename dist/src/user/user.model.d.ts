import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    email: string;
    password: string;
    name: string;
    phone: string;
    photo: string;
    metaId: string;
    googleId: string;
    isActive: boolean;
    verifyToken: string;
}
