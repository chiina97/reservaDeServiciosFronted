import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  isLogged = false;

  // Inject the router so we can navigate after a successful login
  constructor(
    private readonly router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  create(): void {
    this.userService.create(this.user).subscribe({
      next: (data) => {
        this.toastr.success('', data['mensaje'], {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
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
