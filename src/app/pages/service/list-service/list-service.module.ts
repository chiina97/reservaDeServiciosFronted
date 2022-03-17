import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListServiceRoutingModule } from './list-service-routing.module';
import { ListServiceComponent } from './list-service.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListServiceComponent],
  imports: [CommonModule, ListServiceRoutingModule, NgxPaginationModule],
})
export class ListServiceModule {}
