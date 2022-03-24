import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const child: Routes = [
  {
    path: "public",
    component: PublicComponent,
    children: [
      { path: "allbooks", component: AllBooksComponent },
      { path: "book-details/:id/author/:authorId", component: BookDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(child)],
  exports:[RouterModule]
})
export class PublicRoutingModule {}
