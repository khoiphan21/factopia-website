import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { HttpModule }        from '@angular/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GalaxyDisplayComponent } from './galaxy-display/galaxy-display.component';
import { GalaxyControllerComponent } from './galaxy-controller/galaxy-controller.component';
import { GalaxyControllerDetailComponent } from './galaxy-controller-detail/galaxy-controller-detail.component';
import { HeadlineService } from './headline.service';
import { ArticleService } from './article.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';

import { AppRoutingModule }  from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { PlanetOverviewComponent } from './planet-overview/planet-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GalaxyDisplayComponent,
    GalaxyControllerComponent,
    GalaxyControllerDetailComponent,
    HomePageComponent,
    ExplorePageComponent,
    WelcomePageComponent,
    ArticlePageComponent,
    PlanetOverviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HeadlineService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
