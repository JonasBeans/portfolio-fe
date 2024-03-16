import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost } from 'src/DTO/BlogPost';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private host: String;

    constructor(private http: HttpClient) {
        this.host = environment.host;
    }

    public getPostTitles() {
        console.log(environment.host);
        return this.http.get<BlogPost[]>(`http://${this.host}/api/v1/blog`)
    }
}