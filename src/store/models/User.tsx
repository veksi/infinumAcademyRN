import { Model, prop } from 'datx';
import { Model as ModelEnum } from '../../enums/Model';

export class User extends Model {
  public static type = ModelEnum.USER;

  @prop email: string;
  @prop passoword: string;
  @prop _id: string;
}