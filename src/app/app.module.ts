import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterByCategoryPipe } from './filter-by-category.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    LoginComponent,
    MovieCardComponent,
    SideMenuComponent,
    AddMovieComponent,
    FilterByCategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  
  ],
  entryComponents:[AddMovieComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
