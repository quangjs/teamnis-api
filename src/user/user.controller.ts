import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getListUser(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<{
    data: User[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    return await this.userService.findAll(Number(page), Number(limit));
  }
}
