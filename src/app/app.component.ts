import { Component } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Thoughts";
  isHidden = true;
  allPost: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool'
    },
    {
      title: 'Ritual',
      thought: 'Ritual is a well developed app'
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters'
    }
  ];

  addNewPost(post: Post) {
    this.allPost.push(post);
    this.isHidden = !this.isHidden;
  }

  removePost(post: Post) {
    this.allPost.splice(this.allPost.indexOf(post), 1);
  }

  unhide() {
    this.isHidden = !this.isHidden;
  }
}
