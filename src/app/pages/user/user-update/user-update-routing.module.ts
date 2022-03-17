import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/user.guard';
import { UserUpdateComponent } from './user-update.component';

const routes: Routes = [
  {
    path: '',
    component: UserUpdateComponent,
    canActivate: [UserGuard],
    data: { expectedRol: ['user'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUpdateRoutingModule {}
