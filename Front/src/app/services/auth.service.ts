import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../core/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  login(data: User) {
    this.httpClient.post( 'http://127.0.0.1:8000/' + 'auth/login', data).subscribe((response: any) => {
      localStorage.setItem('token', response.token)
      this.router.navigate(['user'])
    }, (error: any) => {
      alert("Произошла ошибка при логине попробуйте заново")
    })
  }


  register(data: User) {
    this.httpClient.post('http://127.0.0.1:8000/' + 'auth/register', data).subscribe((response: any) => {
      this.router.navigate(['auth/login'])
    }, error => {
      alert("Произошла ошибка при регистрации попробуйте заново")
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['auth/login'])
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null
  }


}
