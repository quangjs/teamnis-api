import { UserService } from './user.service';
import { User } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getListUser(page?: number, limit?: number): Promise<{
        data: User[];
        total: number;
        page: number;
        totalPages: number;
    }>;
}
