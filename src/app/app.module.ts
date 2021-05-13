import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './components/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwApiService } from './services/sw.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeDetalheComponent } from './components/home/home-detalhe/home-detalhe.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    HomeDetalheComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SwApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
