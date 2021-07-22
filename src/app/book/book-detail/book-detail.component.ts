import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Book} from "../book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  // @ts-ignore
  book:Book;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    let id =this.id=+this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.findBookById(id).subscribe(res=>{
      this.book=res;
    });

  }

  back() {
    this.route.navigate(['book/list'])
  }
}
