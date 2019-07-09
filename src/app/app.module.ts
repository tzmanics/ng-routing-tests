import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageDetailComponent,
    PageListComponent,
    PageNotFoundComponent,
    PageThreeComponent,
    PageFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
