import {
  Model,
  Table,
  Column,
  DataType,
  HasMany
} from "sequelize-typescript";
import Tutorial from "./tutorial.model"; // Đảm bảo đường dẫn chính xác

@Table({
  tableName: "user",
  timestamps: false
})
export default class User extends Model {
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

  @HasMany(() => Tutorial)
  tutorials?: Tutorial[];
}