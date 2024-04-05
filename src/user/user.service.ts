import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

const userPublicAttr = ['id', 'email', 'photo', 'phone', 'isActive'];

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(
    page = 1,
    limit = 10,
  ): Promise<{
    data: User[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    const { count, rows } = await this.userModel.findAndCountAll({
      attributes: userPublicAttr,
      offset: (page - 1) * limit,
      limit,
    });

    const totalPages = Math.ceil(count / limit);

    return {
      data: rows,
      total: count,
      page,
      totalPages,
    };
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      where: { email },
    });
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: { id },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async create(payload: {
    name?: string;
    isActive?: boolean;
    verifyToken?: string;
    metaId?: string;
    googleId?: string;
    email: string;
    password: string;
  }): Promise<User> {
    return await this.userModel.create(payload);
  }
}
