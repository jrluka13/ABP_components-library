import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { ICONS } from './svg-icon/icons-list';

interface Post {
  body: string;
  id: number;
  userId: number;
  title: string;
}

@Component({
  selector: 'post-lib-post',
  templateUrl: './lib-post.component.html',
  styleUrls: ['./lib-post.component.scss'],
})
export class LibPostComponent {
  private _posts: Post;

  private _pencil = ICONS.PENCIL;

  private _add = ICONS.ADD;

  private _close = ICONS.CLOSE;

  @Input()
  set posts(value: Post) {
    this._posts = value;
  }

  get posts(): Post {
    return this._posts;
  }

  get pencil(): ICONS {
    return this._pencil;
  }

  get add(): ICONS {
    return this._add;
  }

  get close(): ICONS {
    return this._close;
  }

  @Output() deleteHandler: EventEmitter<number> = new EventEmitter<number>();

  @Output() editHandler: EventEmitter<number> = new EventEmitter<number>();

  deletePost(post: Post): void {
    this.deleteHandler.emit(post.id);
  }

  editPost(post: Post) {
    this.editHandler.emit(post.id);
  }
}