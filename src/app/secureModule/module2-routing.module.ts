import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponentComponent } from './secure-component/secure-component.component';


const routes: Routes = [
  {
    path: '',
    component: SecureComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Module2RoutingModule { }
