import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/'], { replaceUrl: true });
    window.history.back();
  }

  navigateForward() {
    window.history.forward();
  }

  canNavigateBack(): boolean {
    return window.history.length > 1;
  }

  canNavigateForward(): boolean {
    return (
      window.history.length > 0 &&
      window.history.length > history.state.navigationId + 1
    );
  }
}
