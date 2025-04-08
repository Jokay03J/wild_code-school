import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private http = inject(HttpClient);

  getArticles() {
    return this.http.get<Article[]>('http://localhost:8080/articles');
  }

  getArticleById(id: string) {
    return this.http.get<Article>(`http://localhost:8080/articles/${id}`);
  }
}
