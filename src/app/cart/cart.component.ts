import { Component, OnInit } from '@angular/core';
import { CartState } from '../store/cart/cart.state';
import { Select, Store } from '@ngxs/store';
import { CartItem } from '../models/cartItem';
import { Observable } from 'rxjs';
import { AddItem, CheckoutItems, DeleteItem } from '../store/cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  @Select(CartState.getItems) items$!: Observable<CartItem[]>;
  @Select(CartState.getTotalPrice) totalPrice$!: Observable<number>;
  public totalPrice: number = 0;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.totalPrice$.subscribe((price) => (this.totalPrice = price));
  }

  public addQuantity(item: CartItem) {
    this.store.dispatch(new AddItem(item));
  }
  public decreaseQuantity(item: CartItem) {
    this.store.dispatch(new DeleteItem(item));
  }

  public checkoutItems() {
    this.store.dispatch(new CheckoutItems());
  }
}
