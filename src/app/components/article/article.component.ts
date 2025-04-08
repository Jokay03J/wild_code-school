import { Component, input } from '@angular/core';
import { Article } from '../../models/article';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article = input.required<Article>();
}
