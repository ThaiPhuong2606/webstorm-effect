import { Routes } from '@angular/router';
import {CatDetailComponent} from './pages/cat-detail/cat-detail.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "cat-detail",
    component:CatDetailComponent
  }
];

