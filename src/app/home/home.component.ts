import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Song } from '../models/song';
import { SongsState } from '../store/songs/songs.state';
import { Observable } from 'rxjs';
import { DeleteSong, SelectSong } from '../store/songs/songs.actions';
import { BANNER } from '../../assets/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Select(SongsState.getSongs) songs$!: Observable<Song[]>;
  bannerImageUrl = BANNER;

  constructor(private store: Store) {}

  selectSong(songId: string) {
    this.store.dispatch(new SelectSong(songId));
  }

  deleteSong(songId: string) {
    this.store.dispatch(new DeleteSong(songId));
  }
}
