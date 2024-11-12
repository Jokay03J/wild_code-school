import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../article/article.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  constructor() {}

  getArticles() {
    return this.http.get<Article[]>(`http://localhost:3000/articles`);
  }

  getArticleById(id: string) {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }
}
