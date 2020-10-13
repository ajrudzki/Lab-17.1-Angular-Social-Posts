import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() currentPost: Post;
  @Output() callParent = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  removePost(remove: Post) {
    this.callParent.emit(remove);
  }
}
