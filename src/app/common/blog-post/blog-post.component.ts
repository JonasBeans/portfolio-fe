import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/DTO/BlogPost';

@Component({
  selector: 'app-blog-post',
  template: '<div><button><p>{{post.title}}</p></button></div>',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
    @Input() public post: BlogPost = {title: ''};

}
