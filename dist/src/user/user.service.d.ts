import { User } from './user.model';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    findAll(page?: number, limit?: number): Promise<{
        data: User[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findByEmail(email: string): Promise<User>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
    create(payload: {
        name?: string;
        isActive?: boolean;
        verifyToken?: string;
        metaId?: string;
        googleId?: string;
        email: string;
        password: string;
    }): Promise<User>;
}
