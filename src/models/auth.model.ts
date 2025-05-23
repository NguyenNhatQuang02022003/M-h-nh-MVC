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
    allowNull: true,
    field: 'username',
  })
  username?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: 'email',
  })
  email?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: 'password',
  })
  password?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    field: 'createat',
  })
  createat?: Date;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: 'role',
  })
  role?: string;
}