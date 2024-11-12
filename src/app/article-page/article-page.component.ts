import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article, ArticleComponent } from '../article/article.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  currentRoute = inject(ActivatedRoute);
  articleSubscription!: Subscription;
  article: Article | null = null;
  apiService = inject(ApiService);

  ngOnInit() {
    this.currentRoute.paramMap.subscribe((params) => {
      this.apiService.getArticleById(params.get('id')!).subscribe((article) => {
        this.article = article;
      });
    });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
}
