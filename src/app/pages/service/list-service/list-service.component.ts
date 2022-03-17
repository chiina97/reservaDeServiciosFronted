import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceI } from 'src/app/interface/service.interface';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
})
export class ListServiceComponent implements OnInit {
  services: ServiceI[] = [];
  userId!: number;
  //paginado:
  length: any;
  page: number = 1;

  constructor(
    private tokenService: TokenService,
    private serviceService: ServiceService,
    private toastr: ToastrService
  ) {
    this.userId = Number(this.tokenService.getIdUser());
  }

  ngOnInit(): void {
    this.listAllServicesByUserId();
  }

  listAllServicesByUserId() {
    this.serviceService.getAllByUserId(this.userId).subscribe((data) => {
      this.services = data;
    });
  }

  deleteById(service: ServiceI): void {
    if (
      confirm('esta seguro de eliminar el servicio "' + service.name + '" ?')
    ) {
      this.serviceService.delete(service.id).subscribe({
        next: (data) => {
          console.log('entre al eliminar');
          this.toastr.success('', data['mensaje'], {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.listAllServicesByUserId();
        },
        error: (err) => {
          this.toastr.error(err.error.mensaje, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
        },
      });
    }
  }
}
