import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {
  user: any;
  username:any;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getUser()
    this.authService.username$.subscribe(
      value => {
        this.username=value
        console.log(this.username)
      }
    )
    this.user=this.authService.user;
    console.log(this.user)

  }

}
