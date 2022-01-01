import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteguardComponent } from './routeguard.component';

const routes: Routes = [
  {
    path:'',
    component:RouteguardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteguardRoutingModule { }
