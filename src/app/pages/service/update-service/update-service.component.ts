import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceI } from 'src/app/interface/service.interface';
import { Service } from 'src/app/models/service';
import { TypeService } from 'src/app/models/type-service';
import { User } from 'src/app/models/user';
import { ServiceService } from 'src/app/services/service.service';
import { TokenService } from 'src/app/services/token.service';
import { TypeServiceService } from 'src/app/services/type-service.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
})
export class UpdateServiceComponent implements OnInit {
  service!: ServiceI;
  serviceId!: number;

  name!: string;
  description!: string;
  instagram!: string;
  twitter!: string;
  wsp!: string;
  urlWeb!: string;
  enable!: boolean;
  user!: User;


  types: TypeService[] = [];

  nameType!: any;

  constructor(
    private tokenService: TokenService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private serviceService: ServiceService,
    private typeService: TypeServiceService
  ) {
    this.serviceId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getServiceData();
    this.findAllTypesServices();
  }
  getServiceData() {
    this.serviceService.findById(this.serviceId).subscribe((data: any) => {
      this.service = data;
      this.name = data.name;
      this.description = data.description;
      this.instagram = data.instagram;
      this.twitter = data.twitter;
      this.wsp = data.wsp;
      this.urlWeb = data.urlWeb;

      this.nameType = this.service.typeService
      console.log("servicio", this.service)
      console.log("data", this.nameType)
    });
  }

  findAllTypesServices() {
    this.typeService.getAll().subscribe({
      next: (data) => {
        console.log('tipos de servicio', data);
        this.types = data;
      },
      error: (err) => {
        console.log('error en los tipos de servicios', err);
      },
    });
  }

  update() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.service.typeServiceId = this.nameType.id;
    this.service.name = this.name;
    this.service.description = this.description;
    this.service.instagram = this.instagram;
    this.service.twitter = this.twitter;
    this.service.wsp = this.wsp;
    this.service.urlWeb = this.urlWeb;
    console.log('que tiene el servicio actualizado', this.service);
    this.serviceService.update(id, this.service).subscribe({
      next: (data) => {
        this.toastr.success('', data['mensaje'], {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        window.history.back();
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
