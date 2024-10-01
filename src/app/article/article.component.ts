import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import {FormsModule} from "@angular/forms"

export interface Article {
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
  @Output() onLike: EventEmitter<Article> = new EventEmitter<Article>(); 

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  test() {
    console.log(this.article.comment);
  }

  handleLike() {
    this.onLike.emit(this.article);
  }
}
