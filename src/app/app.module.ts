import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomePageComponent,
    NavbarComponent
    // ModalContentComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  // exports: [RouterModule],
  providers: [],
  // entryComponents: [ModalContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
