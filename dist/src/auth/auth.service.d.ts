import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    login(email: string, password: string): Promise<any>;
    register(email: string, password: string, name?: string): Promise<any>;
}
