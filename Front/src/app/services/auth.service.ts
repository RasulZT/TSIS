import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../core/interfaces/user";
import {BehaviorSubject, Subject, throwError} from "rxjs";
import {BASE_URL} from "../core/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: any;

  constructor(private httpClient: HttpClient,
              private router: Router) {

    const token = localStorage.getItem('token'); // Предположим, что вы сохраняете токен в localStorage
    this.loggedIn$.next(!!token);
  }

  login(data: any) {
    this.httpClient.post('http://127.0.0.1:8000/' + 'auth/login', data).subscribe((response: any) => {
      localStorage.setItem('token', response.token)
      this.loggedIn$.next(true)
      this.router.navigate(['user'])
    }, (error: any) => {
      alert("Произошла ошибка при логине попробуйте заново")
    })
  }

  getUser() {
    const token = localStorage.getItem('token'); // Получаем токен из localStorage
    if (token) {
      // Если токен есть, добавляем его в заголовок запроса
      const headers = new HttpHeaders({
        'Authorization': `Token ${token}`
      });

      const options = { headers: headers };
      return this.httpClient.get(BASE_URL + 'auth/user', options);

    } else {
      // Если токен отсутствует, вернем null или генерируем ошибку
      return throwError('Token is missing'); // Генерировать ошибку
      // или
      // return of(null); // Вернуть null
    }
  }

  register(data: any) {
    this.httpClient.post('http://127.0.0.1:8000/' + 'auth/register', data).subscribe((response: any) => {
      this.router.navigate(['auth/login'])
    }, error => {
      alert("Произошла ошибка при регистрации попробуйте заново")
    })
  }

  logout() {
    localStorage.clear()
    this.loggedIn$.next(false)
    this.router.navigate(['auth/login'])
  }

  get isLoggedIn() {
    return this.loggedIn$.getValue();
  }
}
