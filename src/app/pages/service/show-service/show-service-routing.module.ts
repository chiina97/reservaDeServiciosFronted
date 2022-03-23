import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowServiceComponent } from './show-service.component';

const routes: Routes = [{ path: '', component: ShowServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowServiceRoutingModule { }
