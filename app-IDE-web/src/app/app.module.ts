import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportErrorComponent } from './report-error/report-error.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    NavbarComponent,
    ReportErrorComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodemirrorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
