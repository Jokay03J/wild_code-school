import { Component, Input, input } from '@angular/core';
import {FormsModule} from "@angular/forms"

interface Article {
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: string;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  // Version moderne(utilise les signaux)
  // article = input.required<Article>();
  @Input({required: true}) article!: Article;
  
  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  test() {
    console.log(this.article.comment);
  }
}
