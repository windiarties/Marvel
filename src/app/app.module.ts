// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NavbarComponent } from './navbar/navbar.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import {
//   MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
//   MatCardModule, MatFormFieldModule
// } from '@angular/material';
// import { CharacterComponent } from './characters/character/character.component';
// import { CharactersComponent } from './characters/characters.component';
// import { HttpClientModule } from '@angular/common/http';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { NgxPaginationModule } from 'ngx-pagination';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     CharacterComponent,
//     CharactersComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     LayoutModule,
//     MatToolbarModule,
//     MatButtonModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatListModule,
//     MatCardModule,
//     MatFormFieldModule,
//     HttpClientModule,
//     FlexLayoutModule,
//     NgxPaginationModule
//   ],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { charactersService } from './services/characters.service';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [charactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
