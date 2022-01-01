import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteguardRoutingModule } from './routeguard-routing.module';
import { RouteguardComponent } from './routeguard.component';


@NgModule({
  declarations: [
    RouteguardComponent
  ],
  imports: [
    CommonModule,
    RouteguardRoutingModule
  ]
})
export class RouteguardModule { }
