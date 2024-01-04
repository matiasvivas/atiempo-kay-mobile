import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pagina-principal',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'pagina-ctacte',
    loadChildren: () => import('./pagina-ctacte/pagina-ctacte.module').then( m => m.PaginaCtactePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-notificaciones',
    loadChildren: () => import('./pagina-notificaciones/pagina-notificaciones.module').then( m => m.PaginaNotificacionesPageModule)
  },
  {
    path: 'pagina-destacados',
    loadChildren: () => import('./pagina-destacados/pagina-destacados.module').then( m => m.PaginaDestacadosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}