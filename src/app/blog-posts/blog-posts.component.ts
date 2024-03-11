import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogPost } from 'src/DTO/BlogPost';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent {
    public posts?: BlogPost[];
    public currentMarkdown: string = "../../assets/posts/Test.md";


    public constructor(private blogService: BlogService) { };

    ngOnInit(){
        this.blogService.getPostTitles().subscribe((result) => this.posts = result);
    }
}
