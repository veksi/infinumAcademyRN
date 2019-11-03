import { Collection, Model } from 'datx';
import { User } from './models/User';
import { Show } from './models/Show';
import { Episode } from './models/Episode';
import { Comment } from './models/Comment';

export class BaseStore extends Collection {
  public static types: Array<any> = [
    User,
    Show,
    Episode,
    Comment,
  ];
}