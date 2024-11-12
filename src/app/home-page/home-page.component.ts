import { Component, inject, OnInit } from '@angular/core';
import { Article, ArticleComponent } from '../article/article.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface New {
  hasNews: boolean;
  article?: Article;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent, AsyncPipe, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  notification: New = { hasNews: false };
  articles$!: Observable<Article[]>;
  http = inject(HttpClient);

  handleLike(article: Article) {
    this.notification = { hasNews: true, article };
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');
  }
}
