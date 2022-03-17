import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserUpdateRoutingModule } from './user-update-routing.module';
import { UserUpdateComponent } from './user-update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    UserUpdateRoutingModule,
    FormsModule
  ]
})
export class UserUpdateModule { }
