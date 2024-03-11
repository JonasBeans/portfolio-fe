import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { BlogPost } from 'src/DTO/BlogPost';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    public currentMarkdown: string = "../../assets/posts/LinodePortfolioWebsite.md";
    public possiblePosts: BlogPost[] = [
        {title:"Linode Portfolio Website"}, 
        {title:"Markdown insert color VS Code plugin"}
    ];

}
