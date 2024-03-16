import { Component } from '@angular/core';
import { SONGS } from '../../../assets/constants';

@Component({
  selector: 'app-quick-menu',
  templateUrl: './quick-menu.component.html',
  styleUrl: './quick-menu.component.css',
})
export class QuickMenuComponent {
  public song = SONGS[0];
}
