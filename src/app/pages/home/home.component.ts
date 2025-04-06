import {Component, OnInit, signal} from '@angular/core';
import {CatService} from '../../services/cat.service';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {CounterState} from '../../ngrx/counter/counter.state';
import {merge, Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import * as CounterActions from '../../ngrx/counter/counter.actions';
import * as BookAction from '../../ngrx/book/book.actions';



import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {BookService} from '../../services/book/book.service';
import {BookState} from '../../ngrx/book/book.state';
import {BookModel} from '../../models/book.model';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';


import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    MatIcon,
    MatInput,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    MatError
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  counter$!: Observable<number>


  isLoadingBook!: Observable<boolean>

  loginForm = new FormGroup({})

  emailControl = new FormControl('', [Validators.required, Validators.email])
  errorEmail = signal('');
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)])
  errorPassword = signal('');

  constructor(private catService: CatService,
              private store: Store<{ counter: CounterState, book: BookState }>,
              private bookService: BookService) {

    merge(this.emailControl.statusChanges, this.emailControl.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEmail());

    merge(this.passwordControl.statusChanges, this.passwordControl.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorPassword());

    this.loginForm.addControl('emailControl', this.emailControl);
    this.loginForm.addControl('passwordControl', this.passwordControl);

  }


  printEmail() {
  console.log(this.emailControl.value)
  }

  updateErrorEmail() {
    if (this.emailControl.hasError('required')) {
      this.errorEmail.set('You must enter a value');
    } else if (this.emailControl.hasError('email')) {
      this.errorEmail.set('Not a valid email');
    } else {
      this.errorEmail.set('');
    }
  }

  updateErrorPassword() {
    if (this.passwordControl.hasError('required')) {
      this.errorPassword.set('You must enter a password');
    } else if (this.passwordControl.hasError('minlength')) {
      this.errorPassword.set('Password must be at least 6 characters');
    } else {
      this.errorPassword.set('');
    }
  }
}
