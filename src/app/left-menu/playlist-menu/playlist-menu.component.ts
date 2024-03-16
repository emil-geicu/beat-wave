import { Component } from '@angular/core';
import { SONGS } from '../../../assets/constants';

@Component({
  selector: 'app-playlist-menu',
  templateUrl: './playlist-menu.component.html',
  styleUrl: './playlist-menu.component.css',
})
export class PlaylistMenuComponent {
  public song = SONGS[0];
}
