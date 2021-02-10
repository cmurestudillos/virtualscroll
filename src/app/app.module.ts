import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
// Drag
import { DragDropModule } from '@angular/cdk/drag-drop';
// Peticiones Http / Servicios Rest
import { HttpClientModule } from '@angular/common/http';
// Componentes
import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';


@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    NavbarComponent,
    FooterComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
