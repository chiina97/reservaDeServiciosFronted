import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateServiceRoutingModule } from './create-service-routing.module';
import { CreateServiceComponent } from './create-service.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateServiceComponent],
  imports: [CommonModule, CreateServiceRoutingModule, FormsModule],
})
export class CreateServiceModule {}
