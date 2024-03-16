import { Component } from '@angular/core';
import { CATEGORIES, SHOPBANNER } from '../../assets/constants';
import { Category } from '../models/category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  bannerImageUrl = SHOPBANNER;
  categories: Category[] = CATEGORIES;
}
