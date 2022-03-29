import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  userId!: number;
  user!: User;
  surname!: any;
  name!: any;
  mail!: any;
  username!: any;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userId = Number(this.tokenService.getIdUser());
  }

  ngOnInit(): void {
    this.findUserById();
  }

  findUserById() {
    this.userService.findById(this.userId).subscribe({
      next: (data) => {
        this.user = data;
        this.mail = data.mail;
        this.surname = data.surname;
        this.name = data.name;
        this.username = data.username;
      },
      error: (err) => {},
    });
  }
  update() {
    this.user.mail = this.mail;
    this.user.name = this.name;
    this.user.surname = this.surname;

    this.userService.update(this.userId, this.user).subscribe({
      next: (data) => {
        this.toastr.success('', data['mensaje'], {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/cuenta']);
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
