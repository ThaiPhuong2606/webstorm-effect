import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon, MatBadgeModule, MatIconModule, MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() itemInCartInNavbarComponent = 0;


}
