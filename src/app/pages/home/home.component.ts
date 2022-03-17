import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/models/type-service';
import { ServiceService } from 'src/app/services/service.service';
import { TokenService } from 'src/app/services/token.service';
import { TypeServiceService } from 'src/app/services/type-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isLogged = false;
  username!: String;

  services: [] = [];
  userId!: number;

  types: TypeService[] = [];
  nameType!: any;

  //paginado:
  length: any;
  page: number = 1;

  constructor(
    private tokenService: TokenService,
    private serviceService: ServiceService,
    private typeService: TypeServiceService
  ) {
    this.userId = Number(this.tokenService.getIdUser());
  }

  ngOnInit() {
    this.getAllServices();
    this.findAllTypesServices();
    this.userIsLogged();
  }

  search() {}
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
  getAllServices() {
    this.serviceService.findAll().subscribe({
      next: (data) => {
        this.services = data;
        console.log('todos los servicios', this.services);
      },
    });
  }

  userIsLogged() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
