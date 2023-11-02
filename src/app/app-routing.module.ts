import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bureau-detudes',
    loadChildren: () => import('./pages/bureau-detudes/bureau-detudes.module').then( m => m.BureauDetudesPageModule)
  },
  {
    path: 'check-user-status/:userId',
    loadChildren: () => import('./pages/check-user-status/check-user-status.module').then( m => m.CheckUserStatusPageModule)
  },
  {
    path: 'new-product',
    loadChildren: () => import('./pages/new-product/new-product.module').then( m => m.NewProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
