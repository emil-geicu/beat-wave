import { Component } from '@angular/core';
import { BANNER, SHOPBANNER } from '../../assets/constants';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  bannerImageUrl = SHOPBANNER;
  categories = [
    {
      name: 'Clothing',
      imageUrl:
        'https://www.fanbace.com/wp-content/uploads/2021/09/louisse-lemuel-enad-CGyur4w8qKo-unsplash-768x512.jpg',
    },
    {
      name: 'Electronics',
      imageUrl:
        'https://i.etsystatic.com/12819719/r/il/4c7ca1/4766260622/il_1080xN.4766260622_n48h.jpg',
    },
    {
      name: 'Books',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/bestbooks-3-644aa97615310.jpg?crop=0.502xw:1.00xh;0.248xw,0&resize=640:*',
    },
    {
      name: 'Sports & Outdoors',
      imageUrl:
        'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F09%2Fkanye-west-yeezy-foam-runner-another-look-000.jpg?w=960&cbr=1&q=90&fit=max',
    },
    {
      name: 'Beauty & Personal Care',
      imageUrl:
        'https://timeandtidewatches.com/wp-content/uploads/2023/01/Untitled-1-50.jpg',
    },
    {
      name: 'Toys & Games',
      imageUrl:
        'https://lastfm.freetls.fastly.net/i/u/ar0/152a04b296e44f25f6c7ba625deb4210.jpg',
    },
  ];
}
