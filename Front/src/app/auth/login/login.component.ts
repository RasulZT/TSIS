import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ""
  password: string = ""

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      window.alert("Вы уже авторизованы")
      this.router.navigate([''])
    }
  }

  login() {
    let data = {
      username: this.username,
      password: this.password,
    }
    this.authService.login(data)

  }

  goToRegister() {
    this.router.navigate(['auth/register'])
  }
}
