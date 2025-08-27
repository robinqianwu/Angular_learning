import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="book-list-container">
      <h2>图书列表</h2>
      
      <div class="books-grid">
        <div class="book-card" *ngFor="let book of books">
          <h3>{{ book.title }}</h3>
          <p><strong>作者：</strong> {{ book.author }}</p>
          <p><strong>ISBN：</strong> {{ book.isbn }}</p>
          <p><strong>出版日期：</strong> {{ book.publishDate | date }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .book-list-container {
      padding: 20px;
    }

    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .book-card {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .book-card h3 {
      margin: 0 0 10px 0;
      color: #333;
    }

    .book-card p {
      margin: 5px 0;
      color: #666;
    }
  `]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (error) => {
        console.error('Error loading books:', error);
      }
    });
  }
}
