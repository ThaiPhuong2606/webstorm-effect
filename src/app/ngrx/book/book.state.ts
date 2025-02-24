import {BookModel} from '../../models/book.model';

export interface BookState {
  ListBooks: BookModel[];
  isFetchingListBooks: boolean;
  fetchListBooks: boolean;
  fetchListBooksError: any;
  book: BookModel | null
}
