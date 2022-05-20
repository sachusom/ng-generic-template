import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./feature/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    loadChildren: () => import('./feature/secure/secure.module').then(m => m.SecureModule)
  },
  {
    path: '**',
    redirectTo: 'auth/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // useHash: true,
      // preloadingStrategy: PreloadAllModules,
    },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
