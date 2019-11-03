import { Model, prop } from 'datx';
import { Model as ModelEnum } from '../../enums/Model';

export class Show extends Model {
  public static type = ModelEnum.SHOW;

  @prop title: string;
  @prop description?: string;
  @prop _id: string;
  @prop likesCount: number;
  @prop imageUrl: string;
}