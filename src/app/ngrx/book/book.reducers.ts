import {createReducer, on} from '@ngrx/store';
import {BookState} from './book.state';

import * as BookAction from './book.actions';
import {state} from '@angular/animations';

export const initialState : BookState = {
  ListBooks: [],
  isFetchingListBooks: false,
  fetchListBooks: false,
  fetchListBooksError: '',
  book: null

}

export const bookReducer = createReducer(
  initialState,

  on(BookAction.fetchListBooks, (state :BookState, {type}) :BookState  => {
    console.log(type)
    return<BookState> {
      ...state,
      ListBooks: [],
      isFetchingListBooks: true,
    }
  }),

  on(BookAction.fetchListBooksSuccess, (state :BookState, {ListBooks, type}) :BookState  => {
    console.log(type)
    return<BookState> {
      ...state,
      ListBooks: ListBooks,
      isFetchingListBooks: false,
      fetchListBooksSuccess: true,
    }
  }),

  on(BookAction.fetchListBooksError, (state :BookState, { error, type }) :BookState  => {
    console.log(type)
    return<BookState> {
        ...state,
        isFetchingListBooks: false,
        fetchListBooksError: error.message,
      }
  })
)
