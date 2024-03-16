import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';
import { SongsState } from '../../store/songs/songs.state';

@Component({
  selector: 'app-right-menu-artist',
  templateUrl: './right-menu-artist.component.html',
  styleUrl: './right-menu-artist.component.css',
})
export class RightMenuArtistComponent {
  @Select(SongsState.getActiveSong) song$!: Observable<Song>;
}
