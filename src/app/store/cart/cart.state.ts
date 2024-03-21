import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CartItem } from '../../models/cartItem';
import { AddItem, CheckoutItems, DeleteItem } from './cart.actions';

export interface CartStateModel {
  items: CartItem[];
  totalPrice: number;
  hasError: boolean;
  isLoading: boolean;
}

const defaultState: CartStateModel = {
  items: [],
  totalPrice: 0,
  hasError: false,
  isLoading: true,
};

@State<CartStateModel>({
  name: 'cart',
  defaults: defaultState,
})
@Injectable()
export class CartState {
  constructor() {}

  @Selector()
  static getItems(state: CartStateModel): CartItem[] {
    return state.items;
  }

  @Selector()
  static getTotalPrice(state: CartStateModel): number {
    return state.totalPrice;
  }

  @Action(AddItem)
  addItem(ctx: StateContext<CartStateModel>, action: AddItem) {
    const state = ctx.getState();
    const newItem: CartItem = action.item;
    let alreadyPresentItem = state.items.find((x) => x.id === newItem.id);
    if (alreadyPresentItem) {
      alreadyPresentItem.quantity++;
      state.totalPrice = state.items
        .map((item) => item.price * item.quantity)
        .reduce(function (a, b) {
          return a + b;
        });
      ctx.setState({
        ...state,
      });
    } else {
      newItem.quantity = 1;
      const updatedItems = [...state.items, newItem];
      state.totalPrice = updatedItems
        .map((item) => item.price * item.quantity)
        .reduce(function (a, b) {
          return a + b;
        });
      ctx.setState({
        ...state,
        items: updatedItems,
      });
    }
  }

  @Action(DeleteItem)
  deleteItem(ctx: StateContext<CartStateModel>, action: DeleteItem) {
    const state = ctx.getState();

    let existingItem = state.items.find((x) => x.id == action.item.id);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      state.totalPrice = state.items
        .map((item) => item.price * item.quantity)
        .reduce(function (a, b) {
          return a + b;
        });
    } else {
      state.items = state.items.filter((item) => item.id !== action.item.id);

      if (state.items.length > 0) {
        state.totalPrice = state.items
          .map((item) => item.price * item.quantity)
          .reduce(function (a, b) {
            return a + b;
          });
      } else {
        state.totalPrice = 0;
      }
    }

    ctx.setState({
      ...state,
    });
  }

  @Action(CheckoutItems)
  checkoutItems(ctx: StateContext<CartStateModel>) {
    const state = ctx.getState();
    state.totalPrice = 0;
    state.items = [];
    ctx.setState({
      ...state,
    });
  }
}
