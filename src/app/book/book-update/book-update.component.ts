import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../book";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  // @ts-ignore
  id:number;
  // @ts-ignore
  formUpdateBook:FormGroup;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this,this.id=+this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.findBookById(this.id).subscribe(res=>{
      let book:Book= res;
      this.formUpdateBook= this.formBuilder.group({
        id:[book.id,],
        title:[book.title,],
        author:[book.author,],
        description:[book.description,],
      })
    })
  }

  updateBook(id:number){
    const book= this.formUpdateBook?.value;
    this.bookService.updateBook(id,book).subscribe(res=>{
      this.route.navigate(['/book/list'])
    })
  }
  back() {
    this.route.navigate(['book/list'])
  }

}
