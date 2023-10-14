import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {TargetElementsService} from "./services/target-elements.service";
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front';
  userLoggedIn: any;
  routerPath = "";

  constructor(private authService: AuthService, private targetElementsService: TargetElementsService, private router: Router) {
    this.targetElementsService.targetElements.push({id: 'header', selector: '#header'});
  }

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(value => {
      this.userLoggedIn = value
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.routerPath = event.url
      console.log(event.url)
    });
  }

}
