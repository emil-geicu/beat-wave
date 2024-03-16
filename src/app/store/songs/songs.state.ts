import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Song } from '../../models/song';
import { DeleteSong, SelectSong } from './songs.actions';
import { SONGS } from '../../../assets/constants';

export interface SongsStateModel {
  songs: Song[];
  activeSongId: string;
  hasError: boolean;
  isLoading: boolean;
}

const defaultState: SongsStateModel = {
  songs: SONGS,
  activeSongId: '1',
  hasError: false,
  isLoading: true,
};

@State<SongsStateModel>({
  name: 'songs',
  defaults: defaultState,
})
@Injectable()
export class SongsState {
  constructor() {}

  @Selector()
  static hasError(state: SongsStateModel): boolean {
    return state.hasError;
  }

  @Selector()
  static isLoading(state: SongsStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static getSongs(state: SongsStateModel): Song[] {
    return state.songs;
  }

  @Selector()
  static getActiveSong(state: SongsStateModel): Song {
    return state.songs.find((song) => song.id == state.activeSongId)!;
  }

  @Action(SelectSong)
  selectSong(ctx: StateContext<SongsStateModel>, action: SelectSong) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      activeSongId: action.songId,
    });
  }

  @Action(DeleteSong)
  deleteSong(ctx: StateContext<SongsStateModel>, action: DeleteSong) {
    const state = ctx.getState();
    const filteredSongs = state.songs.filter(
      (song) => song.id !== action.songId
    );
    ctx.setState({
      ...state,
      songs: filteredSongs,
      activeSongId:
        state.activeSongId === action.songId ? '' : state.activeSongId,
    });
  }
}
