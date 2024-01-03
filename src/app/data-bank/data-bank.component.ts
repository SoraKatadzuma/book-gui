import { Component, Inject, OnInit } from '@angular/core';
import { BookDTO } from '../bookdto';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-bank',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './data-bank.component.html',
  styleUrl: './data-bank.component.css'
})
export class DataBankComponent implements OnInit {
  bookDataBank: BookDTO[] = [];

 
  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService
      .getBooks()
      .subscribe(data => {
        if (data == null)
          return;
        data.forEach(element => {
          this.bookDataBank.push(element);
        });
        // data.forEach(element => {
        //   this.bookDataBank.push(element);
        // });
      });
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
  }


  getBirthYear(d?: Date | string): string {
    if (d == null)
      return "Unknown";

    var resolvedDate: Date = new Date(d);
    return resolvedDate.getFullYear().toString();
  }

  getDeathYear(d?: Date | string): string {
    if (d == null)
      return "Present";

    var resolvedDate: Date = new Date(d);
    return resolvedDate.getFullYear().toString();
  }
}
