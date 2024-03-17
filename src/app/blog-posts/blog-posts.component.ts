import { Component } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { BlogPost } from 'src/DTO/BlogPost';
import { Observable, map, pipe } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent {
    
    public posts?: String[];
    public currentMarkdown: string = "";

    public constructor(
        private blogService: BlogService
    ) { };

    ngOnInit(){
        this.blogService.getPostTitles().subscribe((result) => this.posts = result);
    }

    receivePageContent(pageContent: BlogPost) {
        const decoder = new TextDecoder('utf-8');
        this.currentMarkdown = decoder
            .decode(Uint8Array.from(atob(pageContent.content), c => c.charCodeAt(0)).buffer);
    }

}
