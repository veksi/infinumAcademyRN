import { Model, prop } from 'datx';
import { Model as ModelEnum } from '../../enums/Model';

export class Comment extends Model {
  public static type = ModelEnum.COMMENT;

  @prop text: string;
  @prop episodeId: string;
  @prop _id: string;
  @prop userEmail: string;
}