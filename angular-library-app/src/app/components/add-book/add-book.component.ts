import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      isbn: ['', [Validators.required, Validators.pattern(/^[0-9-]{10,13}$/)]],
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: [''],
      publishDate: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(0)]],
      isAvailable: [true]
    });
  }

  ngOnInit(): void {
    this.generateRandomBookData();
  }

  generateRandomBookData(): void {
    // 生成一个随机的13位ISBN
    const isbn = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join('');
    
    // 生成随机的出版日期（最近5年内）
    const today = new Date();
    const randomDate = new Date(
      today.getFullYear() - Math.floor(Math.random() * 5),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    );

    // 生成随机数量（1-10）
    const quantity = Math.floor(Math.random() * 10) + 1;

    // 填充表单
    this.bookForm.patchValue({
      isbn: isbn,
      publishDate: randomDate.toISOString().split('T')[0],
      quantity: quantity
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = {
        ...this.bookForm.value,
        publishDate: new Date(this.bookForm.value.publishDate)
      };

      this.bookService.addBook(book).subscribe({
        next: () => {
          // TODO: 添加成功提示
          this.router.navigate(['/books']);
        },
        error: (error) => {
          console.error('添加图书失败', error);
          // TODO: 添加错误提示
        }
      });
    }
  }
}