import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    // If this path is the 'full' match...
    pathMatch: 'full',
    // ...redirect to this route.
    redirectTo: 'login',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      // aca van a ir los hijos del layout,de esta forma heredo en header y footer
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'registrarse',
        loadChildren: () =>
          import('./pages/user/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/user/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'crearServicio',
        loadChildren: () =>
          import('./pages/service/create-service/create-service.module').then(
            (m) => m.CreateServiceModule
          ),
      },
      {
        path: 'editarServicio/:id',
        loadChildren: () =>
          import('./pages/service/update-service/update-service.module').then(
            (m) => m.UpdateServiceModule
          ),
      },
      {
        path: 'listarServicios',
        loadChildren: () =>
          import('./pages/service/list-service/list-service.module').then(
            (m) => m.ListServiceModule
          ),
      },
      {
        path: 'editarCuenta',
        loadChildren: () =>
          import('./pages/user/user-update/user-update.module').then(
            (m) => m.UserUpdateModule
          ),
      },
      {
        path: 'cuenta',
        loadChildren: () =>
          import('./pages/user/user-show/user-show.module').then(
            (m) => m.UserShowModule
          ),
      },
    ],
  },

  //si pongo una ruta que no existe me redirige igual a login
  {
    path: '**',
    // If this path is the 'full' match...
    pathMatch: 'full',
    // ...redirect to this route.
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
