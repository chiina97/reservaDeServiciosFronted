import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html'
})
export class UserShowComponent implements OnInit {
  user!: User;
  userId!: number;

  constructor(
    private tokenService: TokenService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userId = Number(this.tokenService.getIdUser());
  }

  ngOnInit(): void {
    this.findUserById()
  }

  findUserById() {
    this.userService.findById(this.userId).subscribe({
      next: (data) => {
        console.log('encontre usuario', data);
        this.user = data;
      },
      error: (err) => {
        console.log('error en los tipos de servicios', err);
      },
    })
  }

}
