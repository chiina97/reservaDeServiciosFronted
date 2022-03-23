import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceI } from 'src/app/interface/service.interface';
import { ServiceService } from 'src/app/services/service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
})
export class ShowServiceComponent implements OnInit {
  serviceId: number;
  service!: ServiceI;
  isLogged = false;

  constructor(
    private serviceService: ServiceService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {
    this.serviceId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getServiceById();
    this.userIsLogged();
  }

  userIsLogged() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getServiceById() {
    this.serviceService.findById(this.serviceId).subscribe({
      next: (data) => {
        this.service = data;
      },
    });
  }
  //solo para simular la contratacion:
  showPoster() {
    this.toastr.success('', 'Servicio Contratado!', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
}
