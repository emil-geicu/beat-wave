import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { RightMenuArtistComponent } from './right-menu/right-menu-artist/right-menu-artist.component';
import { RightMenuLyricsComponent } from './right-menu/right-menu-lyrics/right-menu-lyrics.component';
import { QuickMenuComponent } from './left-menu/quick-menu/quick-menu.component';
import { PlaylistMenuComponent } from './left-menu/playlist-menu/playlist-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RightMenuArtistComponent,
    RightMenuLyricsComponent,
    QuickMenuComponent,
    PlaylistMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
