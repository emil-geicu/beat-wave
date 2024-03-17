import { Component } from '@angular/core';
import { SHOPBANNER } from '../../assets/constants';
import { ShopCategory } from '../models/category';
import { Select, Store } from '@ngxs/store';
import { ShopCategoriesState } from '../store/shopCategories/shopCategories.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SelectCategory } from '../store/shopCategories/shopCategories.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  @Select(ShopCategoriesState.getSongs) categories$!: Observable<
    ShopCategory[]
  >;
  public bannerImageUrl = SHOPBANNER;

  constructor(private router: Router, private store: Store) {}

  navigateToCategory(category: ShopCategory) {
    this.store.dispatch(new SelectCategory(category.id));
    this.router.navigate(['/category', category.name]);
  }
}
