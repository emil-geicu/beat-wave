import { CartItem } from '../../models/cartItem';

export class GetItems {
  static readonly type = '[Cart] Get Items';
}

export class getError {
  static readonly type = '[Cart] Error Cart';
}

export class getSuccess {
  static readonly type = '[Cart] Success Cart';
}

export class DeleteItem {
  static readonly type = '[Cart] Delete Item';
  constructor(public item: CartItem) {}
}

export class AddItem {
  static readonly type = '[Cart] Add Item';
  constructor(public item: CartItem) {}
}

export class CheckoutItems {
  static readonly type = '[Cart] Checkout Items';
  constructor() {}
}
