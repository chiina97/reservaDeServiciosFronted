import { Component, OnInit } from '@angular/core';
import { ServiceI } from 'src/app/interface/service.interface';
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

  services: ServiceI[] = [];
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

  search() {
    this.serviceService.findAllByType(this.nameType.id).subscribe({
      next: (data) => {
        this.services = data;
      },
      error: (err) => {},
    });
  }

  findAllTypesServices() {
    this.typeService.getAll().subscribe({
      next: (data) => {
        this.types = data;
      },
      error: (err) => {},
    });
  }
  getAllServices() {
    this.serviceService.findAll().subscribe({
      next: (data) => {
        this.services = data;
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
