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
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'tabs', children: [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
    { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule) },
    { path: 'list-coupon', loadChildren: () => import('./list-coupon/list-coupon.module').then(m => m.ListCouponPageModule) },
    ]
    },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'list-coupon',
    loadChildren: () => import('./list-coupon/list-coupon.module').then( m => m.ListCouponPageModule)
  },
  {
    path: 'pasta',
    loadChildren: () => import('./pasta/pasta.module').then( m => m.PastaPageModule)
  },
  {
    path: 'pastadetail/:index',
    loadChildren: () => import('./pastadetail/pastadetail.module').then( m => m.PastadetailPageModule)
  },
  {
    path: 'newpasta',
    loadChildren: () => import('./newpasta/newpasta.module').then( m => m.NewpastaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
