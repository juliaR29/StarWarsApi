import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwApiService } from 'src/app/services/sw.service';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home.routing.module';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [SwApiService],
})
export class HomeModule { }
