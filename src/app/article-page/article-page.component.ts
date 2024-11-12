import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article, ArticleComponent } from '../article/article.component';

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
  http = inject(HttpClient);

  ngOnInit() {
    this.currentRoute.paramMap.subscribe((params) => {
      this.getArticleById(params.get('id')!);
    });
  }

  getArticleById(id: string) {
    this.articleSubscription = this.http
      .get<Article>(`http://localhost:3000/articles/${id}`)
      .subscribe((article) => {
        this.article = article;
      });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
}
