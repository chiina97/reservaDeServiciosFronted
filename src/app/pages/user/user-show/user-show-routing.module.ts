import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/user.guard';
import { UserShowComponent } from './user-show.component';

const routes: Routes = [
  {
    path: '',
    component: UserShowComponent,
    canActivate: [UserGuard],
    data: { expectedRol: ['user'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserShowRoutingModule {}
