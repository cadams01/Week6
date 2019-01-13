import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TeaService } from './services/tea.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaComponent } from './tea/tea.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    TeaComponent,
    HomeComponent,
    NavComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
