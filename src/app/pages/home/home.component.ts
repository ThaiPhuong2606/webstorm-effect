import {Component, OnInit} from '@angular/core';
import {CatService} from '../../services/cat.service';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {CounterState} from '../../ngrx/counter/counter.state';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import * as CounterActions from '../../ngrx/counter/counter.actions';
import * as BookAction from '../../ngrx/book/book.actions';



import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {BookService} from '../../services/book/book.service';
import {BookState} from '../../ngrx/book/book.state';
import {BookModel} from '../../models/book.model';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    MatButton,
    MatProgressSpinner
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  counter$!: Observable<number>
  book$ : Observable<BookModel[]>


  isLoadingBook!: Observable<boolean>




  constructor(private catService: CatService,
              private store: Store<{ counter: CounterState, book: BookState }>,
              private bookService: BookService) {
    this.counter$ = this.store.select('counter', 'count')
    this.book$ = this.store.select('book', 'ListBooks')
    this.isLoadingBook = this.store.select('book', 'isFetchingListBooks')
    this.store.dispatch(BookAction.fetchListBooks());
  }

  ngOnInit() {
    this.book$.subscribe((data) => {
      console.log(data);
    })
  }

  increase() {
    this.store.dispatch(CounterActions.increment());
  }

  decrease() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  // get cats() {
  //   return this.catService.cats;
  // }
}
