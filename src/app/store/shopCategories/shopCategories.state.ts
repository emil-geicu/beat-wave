import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CATEGORIES } from '../../../assets/constants';
import { DeleteCategory, SelectCategory } from './shopCategories.actions';
import { ShopCategory as ShopCategory } from '../../models/category';

export interface ShopCategoriesStateModel {
  categories: ShopCategory[];
  activeCategoryId: string;
  hasError: boolean;
  isLoading: boolean;
}

const defaultState: ShopCategoriesStateModel = {
  categories: CATEGORIES,
  activeCategoryId: '1',
  hasError: false,
  isLoading: true,
};

@State<ShopCategoriesStateModel>({
  name: 'shopCategories',
  defaults: defaultState,
})
@Injectable()
export class ShopCategoriesState {
  constructor() {}

  @Selector()
  static hasError(state: ShopCategoriesStateModel): boolean {
    return state.hasError;
  }

  @Selector()
  static isLoading(state: ShopCategoriesStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static getSongs(state: ShopCategoriesStateModel): ShopCategory[] {
    return state.categories;
  }

  @Selector()
  static getActiveCategory(state: ShopCategoriesStateModel): ShopCategory {
    return state.categories.find((song) => song.id == state.activeCategoryId)!;
  }

  @Action(SelectCategory)
  selectSong(
    ctx: StateContext<ShopCategoriesStateModel>,
    action: SelectCategory
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      activeCategoryId: action.songId,
    });
  }

  @Action(DeleteCategory)
  deleteSong(
    ctx: StateContext<ShopCategoriesStateModel>,
    action: DeleteCategory
  ) {
    const state = ctx.getState();
    const filteredSongs = state.categories.filter(
      (song) => song.id !== action.songId
    );
    ctx.setState({
      ...state,
      categories: filteredSongs,
      activeCategoryId:
        state.activeCategoryId === action.songId ? '' : state.activeCategoryId,
    });
  }
}
