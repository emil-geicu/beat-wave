import { Component } from '@angular/core';
import { SONGS } from '../../../assets/constants';

@Component({
  selector: 'app-right-menu-artist',
  templateUrl: './right-menu-artist.component.html',
  styleUrl: './right-menu-artist.component.css',
})
export class RightMenuArtistComponent {
  public song = SONGS[0];
}
