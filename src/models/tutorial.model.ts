import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./auth.model"; // đổi lại đúng tên model nếu khác

@Table({
  tableName: "tutorials",
  timestamps: true
})
export default class Tutorial extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "title"
  })
  title?: string;

  @Column({
    type: DataType.STRING(255),
    field: "description"
  })
  description?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "published"
  })
  published?: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: "userId",
    allowNull: false,
  })
  userId?: number;

  @BelongsTo(() => User)
  user?: User;
}
