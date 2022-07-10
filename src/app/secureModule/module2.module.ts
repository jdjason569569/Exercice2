import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponentComponent } from './secure-component/secure-component.component';
import { Module2RoutingModule } from './module2-routing.module';



@NgModule({
  declarations: [
    SecureComponentComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
