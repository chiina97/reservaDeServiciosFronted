import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShowRoutingModule } from './user-show-routing.module';
import { UserShowComponent } from './user-show.component';


@NgModule({
  declarations: [
    UserShowComponent
  ],
  imports: [
    CommonModule,
    UserShowRoutingModule
  ]
})
export class UserShowModule { }
