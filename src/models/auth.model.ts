import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "user",
    timestamps: false
})
export default class User extends Model{
    @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'username',
  })
  username?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'email',
  })
  email?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'password',
  })
  password?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'role',
  })
  role?: string;
}