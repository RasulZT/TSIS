import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = ""
  password: string = ""
  name: string = ""
  selectedRole: string = "";

  constructor(
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    let data = {
      username: this.username,
      password: this.password,
      name: this.name,
      role: this.selectedRole
    }
  }

  goToLogin() {
    this.router.navigate(['auth/login'])
  }
}
