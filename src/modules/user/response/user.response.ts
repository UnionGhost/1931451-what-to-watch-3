import { Expose } from 'class-transformer';

export default class UserResponse {
  @Expose()
  public id!: string;

  @Expose()
  public username!: string;

  @Expose()
  public email!: string;

  @Expose()
  public avatarPath!: string;
}
