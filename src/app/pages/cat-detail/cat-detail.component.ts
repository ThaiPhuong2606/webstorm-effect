import { Component } from '@angular/core';
import {CatModel} from '../../models/cat.model';
import {CatService} from '../../services/cat.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-cat-detail',
  standalone: true,
  imports: [],
  templateUrl: './cat-detail.component.html',
  styleUrl: './cat-detail.component.scss'
})
export class CatDetailComponent {

  currentCat!: CatModel | undefined

  constructor(private catService : CatService,
              private activateRoute: ActivatedRoute) {

  }
}
