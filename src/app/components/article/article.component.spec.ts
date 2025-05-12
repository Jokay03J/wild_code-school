import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let nativeElement: HTMLElement;
  const mockArticle = {
    title: 'Test Title',
    category: {
      id: 1,
      name: 'Test Category',
    },
    content: 'Test Content',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    fixture.componentRef.setInput('article', mockArticle);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the article title', () => {
    expect(nativeElement.querySelector('h3')?.textContent).toContain(
      mockArticle.title
    );
  });

  it('should display the article category', () => {
    expect(nativeElement.querySelector('mat-chip')?.textContent).toContain(
      mockArticle.category.name
    );
  });
});
