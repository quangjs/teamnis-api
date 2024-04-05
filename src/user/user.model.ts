import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  name: string;

  @Column
  phone: string;

  @Column
  photo: string;

  @Column
  metaId: string;

  @Column
  googleId: string;

  @Column({ defaultValue: false })
  isActive: boolean;

  @Column
  verifyToken: string;
}
