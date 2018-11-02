import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule 
   } from "@angular/material";
import { CategoryAddComponent } from './category-add/category-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsAddComponent,
    NewsEditComponent,
    CategoryAddComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpModule,
    MatSnackBarModule,
    MatTooltipModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})



export class AppModule { }
