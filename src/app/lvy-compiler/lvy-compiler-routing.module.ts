import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LvyCompilerComponent } from './lvy-compiler.component';

const routes: Routes = [
  {
    path:'',
    component:LvyCompilerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LvyCompilerRoutingModule { }
