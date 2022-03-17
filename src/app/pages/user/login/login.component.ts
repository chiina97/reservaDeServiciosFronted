import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(
    private readonly router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  public authenticate(): void {
    this.userService.authenticate(this.user).subscribe({
      next: (res) => {
        this.tokenService.setToken(res.token);
        this.router.navigate(['/home']);
        window.location.reload();
        console.log('funciona');
      },
      error: (err) => {
        console.log('error', err, 'usuario', this.user);
        this.toastr.error('usuario/contraseña incorrecta', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      },
    });
  }
}
