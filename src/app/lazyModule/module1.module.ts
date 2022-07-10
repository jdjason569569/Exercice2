import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { Module1RoutingModule } from './module1-routing.module';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
