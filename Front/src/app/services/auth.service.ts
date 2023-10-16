import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../core/interfaces/user";
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs";
import {BASE_URL} from "../core/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  role$:BehaviorSubject<string>=new BehaviorSubject<string>("");
  username$: BehaviorSubject<string>=new BehaviorSubject<string>("");
  user="";

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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });

    const options = {headers: headers};

    return this.httpClient.get(BASE_URL + 'auth/user', options).subscribe((res: any) => {
      this.user = res.name;
      localStorage.setItem('role', res.role)
      this.role$.next(res.role)
      this.username$.next(res.name)
      // console.log(this.user);
    }, error => {
      // Обработка ошибки
    });
  }

  register(data: any): Observable<any> {
    return this.httpClient.post(BASE_URL + 'auth/register', data);
  }

  setCourses(userId: number, courses: number[]): Observable<any> {
    const data = {
      userId: userId,
      courses: courses
    };

    return this.httpClient.post(BASE_URL + 'auth/set-courses', data);
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
