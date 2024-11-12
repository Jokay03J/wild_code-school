import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Article, ArticleComponent } from '../article/article.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

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
  articles: Article[] | undefined;
  apiService = inject(ApiService);

  handleLike(article: Article) {
    this.notification = { hasNews: true, article };
  }

  ngOnInit(): void {
    this.articles$ = this.apiService.getArticles();
  }
}
