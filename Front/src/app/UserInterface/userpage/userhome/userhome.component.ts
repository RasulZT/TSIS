import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit{

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUser()
  }
}
