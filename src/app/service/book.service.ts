import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Book} from "../book/book";

const  API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  getAll():Observable<any>{
    return this.http.get<any>(`${API_URL}/books`);
  }

  addBook(book:Book):Observable<any>{
    return this.http.post<any>(API_URL+'/books',book);
  }

  findBookById(id: any):Observable<any> {
    return this.http.get<any>(`${API_URL}/books/${id}`);
  }

  updateBook(id: number, book:Book) {
    return this.http.put<any>(`${API_URL}/books/${id}`, book);
  }

  deleteCategory(id: number) {
    return this.http.delete<any>(`${API_URL}/books/${id}`);

  }
}
