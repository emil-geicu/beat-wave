import { Component } from '@angular/core';
import { SONGS } from '../../../assets/constants';

@Component({
  selector: 'app-right-menu-lyrics',
  templateUrl: './right-menu-lyrics.component.html',
  styleUrl: './right-menu-lyrics.component.css',
})
export class RightMenuLyricsComponent {
  public song = SONGS[0];
}
