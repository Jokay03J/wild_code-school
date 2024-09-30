import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  currentRoute = inject(ActivatedRoute);
  articleId!: string;

  ngOnInit() {
    this.currentRoute.paramMap.subscribe((params) => {
      this.articleId = params.get('id')!;
    })
  }
}
