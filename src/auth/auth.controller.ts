import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.login(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() registerInDto: Record<string, any>) {
    return this.authService.register(
      registerInDto.name,
      registerInDto.email,
      registerInDto.password,
    );
  }

  @HttpCode(HttpStatus.OK)
  @Get('google')
  googleAuth() {
    return { greeting: 'google auth' };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
