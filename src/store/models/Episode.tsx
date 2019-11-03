import { Model, prop } from 'datx';
import { Model as ModelEnum } from '../../enums/Model';

export class Episode extends Model {
  public static type = ModelEnum.EPISODE;

  @prop title: string;
  @prop description?: string;
  @prop _id: string;
  @prop imageUrl: string;
  @prop episodeNumber: string;
  @prop season: string;
}