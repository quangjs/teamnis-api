import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<any>;
    register(registerInDto: Record<string, any>): Promise<any>;
    googleAuth(): {
        greeting: string;
    };
    getProfile(req: any): any;
}
