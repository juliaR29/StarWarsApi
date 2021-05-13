import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeDetalheComponent } from './home-detalhe/home-detalhe.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filme/:id', component: HomeDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
