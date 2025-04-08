import { Component, inject } from '@angular/core';
import { ArticlesService } from '../../services/articles/articles.service';
import { AsyncPipe } from '@angular/common';
import { ArticleComponent } from '../../components/article/article.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AsyncPipe, ArticleComponent, NavbarComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  articlesService = inject(ArticlesService);
  articles = this.articlesService.getArticles();
}
