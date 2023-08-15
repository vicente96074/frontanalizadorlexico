import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenListComponent } from './token-list/token-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CodeEditorComponent } from './code-editor/code-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenListComponent,
    CodeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Agregar FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

