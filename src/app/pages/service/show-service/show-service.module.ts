import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowServiceRoutingModule } from './show-service-routing.module';
import { ShowServiceComponent } from './show-service.component';


@NgModule({
  declarations: [
    ShowServiceComponent
  ],
  imports: [
    CommonModule,
    ShowServiceRoutingModule
  ]
})
export class ShowServiceModule { }
