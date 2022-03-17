import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  isAdmin = false;
  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
