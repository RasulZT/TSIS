import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit{

  constructor(private authService:AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.authService.getUser()
  }

}
