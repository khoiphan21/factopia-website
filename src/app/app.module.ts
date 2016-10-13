import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GalaxyDisplayComponent } from './galaxy-display/galaxy-display.component';
import { GalaxyControllerComponent } from './galaxy-controller/galaxy-controller.component';
import { GalaxyControllerDetailComponent } from './galaxy-controller-detail/galaxy-controller-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GalaxyDisplayComponent,
    GalaxyControllerComponent,
    GalaxyControllerDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
