import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user || !user.isActive) {
      throw new UnauthorizedException();
    }
    const hashPass = await bcrypt.hash(password, saltOrRounds);
    const isMathPass = await bcrypt.compare(user.password, hashPass)
    if (!isMathPass) {
      throw new UnauthorizedException();
    }
    const secret = await this.configService.get('SECRET');
    const token = await this.jwtService.signAsync(user, { secret });
    return {
      token,
      ...user,
    };
  }

  async register(email: string, password: string, name?: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user?.email) {
      throw new BadRequestException();
    }
    const hashPass = await bcrypt.hash(password, saltOrRounds);
    const verifyToken = uuidv4()
    // TODO: write to db
    await this.userService.create({
      name,
      email,
      password: hashPass,
      isActive: false,
      verifyToken,
    })
    // sent email verify with uuid
    return { sucess: true }
  }
}
