import { Component } from '@angular/core';
import { SongsState } from '../../store/songs/songs.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';

@Component({
  selector: 'app-right-menu-lyrics',
  templateUrl: './right-menu-lyrics.component.html',
  styleUrl: './right-menu-lyrics.component.css',
})
export class RightMenuLyricsComponent {
  @Select(SongsState.getActiveSong) song$!: Observable<Song>;
}
