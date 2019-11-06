import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './modules/card/card.component';
import { MainComponent } from './modules/main/main.component';
import { MyNavBarComponent } from './modules/my-nav-bar/my-nav-bar.component';
import { MyFooterComponent } from './modules/my-footer/my-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent,
    MyNavBarComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
