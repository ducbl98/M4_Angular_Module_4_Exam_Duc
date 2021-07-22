import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  // @ts-ignore
  formAddBook:FormGroup
  constructor(private bookService:BookService,
              private route:Router,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formAddBook= this.formBuilder.group({
      id:['',],
      title:['',],
      author:['',],
      description:['',],
    })
  }

  submit(){
    const book = this.formAddBook?.value;
    this.bookService.addBook(book).subscribe(res=>{
      this.route.navigate(['/book/list'])
    })
  }
  back() {
    this.route.navigate(['book/list'])
  }


}
