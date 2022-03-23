import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/models/service';
import { TypeService } from 'src/app/models/type-service';
import { User } from 'src/app/models/user';
import { ServiceService } from 'src/app/services/service.service';
import { TokenService } from 'src/app/services/token.service';
import { TypeServiceService } from 'src/app/services/type-service.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
})
export class CreateServiceComponent implements OnInit {
  service: Service = new Service();
  name!: string;

  types: TypeService[] = [];

  nameType!: any;
  userId!: number;
  constructor(
    private serviceService: ServiceService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router,
    private typeService: TypeServiceService
  ) {}

  ngOnInit(): void {
    this.findAllTypesServices();
  }

  findAllTypesServices() {
    this.typeService.getAll().subscribe({
      next: (data) => {
        this.types = data;
      },
      error: (err) => {},
    });
  }

  create(): void {
    const tipo = new TypeService(this.nameType.id, this.nameType.type);
    this.userId = Number(this.tokenService.getIdUser());

    this.service.userId = this.userId;
    this.service.typeServiceId = tipo.id;

    this.serviceService.create(this.service).subscribe({
      next: (data) => {
        this.toastr.success('', 'servicios creado!', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listarServicios']);
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
