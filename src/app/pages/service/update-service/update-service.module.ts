import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateServiceRoutingModule } from './update-service-routing.module';
import { UpdateServiceComponent } from './update-service.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateServiceComponent],
  imports: [CommonModule, UpdateServiceRoutingModule, FormsModule],
})
export class UpdateServiceModule {}
