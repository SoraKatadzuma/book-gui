import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDTO } from './bookdto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // TODO: allow this to be configured.
  static readonly API_URL: string =
    "http://127.0.0.1:8080/api/v1/book";


  constructor(private http: HttpClient) {
  }

  createBook(): void /* Observable<BookDTO> */ {
    // TODO:
  }

  getBooks(): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(BookService.API_URL);
  }

  updateBook(bookId: number, updates: BookDTO): void /* Observable<BookDTO> */ {
    // TODO:
  }

  deleteBook(bookId: number): void {
    this.http.delete(BookService.API_URL + "/" + bookId);
  }
}
