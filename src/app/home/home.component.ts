import { Component } from '@angular/core';
import { SONGS } from '../../assets/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public songs = SONGS;
}
