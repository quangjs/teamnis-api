"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const saltOrRounds = 10;
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async login(email, password) {
        const user = await this.userService.findByEmail(email);
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException();
        }
        const hashPass = await bcrypt.hash(password, saltOrRounds);
        const isMathPass = await bcrypt.compare(user.password, hashPass);
        if (!isMathPass) {
            throw new common_1.UnauthorizedException();
        }
        const secret = await this.configService.get('SECRET');
        const token = await this.jwtService.signAsync(user, { secret });
        return {
            token,
            ...user,
        };
    }
    async register(email, password, name) {
        const user = await this.userService.findByEmail(email);
        if (user?.email) {
            throw new common_1.BadRequestException();
        }
        const hashPass = await bcrypt.hash(password, saltOrRounds);
        const verifyToken = (0, uuid_1.v4)();
        await this.userService.create({
            name,
            email,
            password: hashPass,
            isActive: false,
            verifyToken,
        });
        return { sucess: true };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map