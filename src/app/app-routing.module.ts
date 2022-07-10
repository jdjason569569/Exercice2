import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './guards/access.guard';

const routes: Routes = [
  
  {path: 'lazy',  
  loadChildren: () => import('./lazyModule/module1.module').then(module => module.Module1Module)},
  {path: 'seguro',  
  loadChildren: () => import('./secureModule/module2.module').then(module => module.Module2Module),
   canLoad:[AccessGuard]},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
