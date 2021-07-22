import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[]=[];
  constructor(private bookService:BookService,
              private route:Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.bookService.getAll().subscribe(res=>{
      this.books=res;
    })
  }

  delete(id: any) {
    if (confirm('Are you sure')){
      this.bookService.deleteCategory(id).subscribe(res=>{
        this.getAll();
        this.route.navigate(['/book/list'])
        }
      )
    }
  }
}
