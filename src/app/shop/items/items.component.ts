import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShopCategoriesState } from '../../store/shopCategories/shopCategories.state';
import { ShopCategory } from '../../models/category';
import { ITEMS } from '../../../assets/constants';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../../models/item';
import { HomeComponent } from '../../home/home.component';
import { ItemDialogComponent } from './itemDialog/itemDialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent implements OnInit {
  @Select(ShopCategoriesState.getActiveCategory)
  activeCategory$!: Observable<ShopCategory>;

  public activeCategory!: ShopCategory;
  public bannerImageUrl!: string;
  public items!: Item[];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.activeCategory$.subscribe((category) => {
      this.activeCategory = category;
      this.bannerImageUrl = category.imageUrl;
      this.items = ITEMS.filter(
        (item) => item.categoryId == this.activeCategory.id
      );
    });
  }

  openDialog(item: Item): void {
    if (!this.isAddToCartButtonClick(event)) {
      const dialogRef = this.dialog.open(ItemDialogComponent, {
        width: '70%',
        height: '70%',
        data: { item: item },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
  }

  addToCart(event: MouseEvent, item: any): void {
    event.stopPropagation();
  }

  private isAddToCartButtonClick(event: any): boolean {
    return event && event.target && event.target.tagName === 'MAT-ICON';
  }
}
