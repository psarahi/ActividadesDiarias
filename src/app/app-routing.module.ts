import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Modelos/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  // { path: 'registro', loadChildren: () => import('./page/registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },

  {
    path: 'tabsGroup',
   // canActivate: [AuthGuard],
    loadChildren: () => import('./page/tabs/tabs.module').then(m => m.TabsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
