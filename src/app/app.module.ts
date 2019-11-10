import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycardComponent } from './mycard/mycard.component';
import { TutorialpageComponent } from './Pages/tutorialpage/tutorialpage.component';
import { NotfoundpageComponent } from './Pages/notfoundpage/notfoundpage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MycardComponent,
    TutorialpageComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
