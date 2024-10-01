import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articles = [
    { 
      id: 'b431cefb-46df-426d-99d6-90cc46f816a3',
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      id: "0241d1ae-be2c-4cf8-9dab-71ccad3ba8a2",
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 75 
    },
    { 
      id: 'ae104ef6-deef-4582-bcce-d9f35d63ca6b',
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 200 
    }
  ];
  publishedArticle = this.articles.filter((article) => article.isPublished)
}
