import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookAddComponent} from "./book-add/book-add.component";
import {BookUpdateComponent} from "./book-update/book-update.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  {
    path:'list',
    component:BookListComponent,
  },
  {
    path:'create',
    component:BookAddComponent,
  },
  {
    path:'edit/:id',
    component:BookUpdateComponent,
  },
  {
    path:'detail/:id',
    component:BookDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
