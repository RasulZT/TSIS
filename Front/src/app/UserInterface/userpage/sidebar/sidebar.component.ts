import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  role: any;

  constructor(private router: Router, private authServise: AuthService) {
  }

  ngOnInit(): void {
    this.authServise.role$.subscribe(value => {
      this.role = value;
    })
  }


  openHomePage() {
    this.router.navigate(['user'])
  }

  openCourses() {
    this.router.navigate(['user/courses'])
  }

  openAddTab() {
    this.router.navigate(['user/add'])
  }

  OpenRegister() {
    this.router.navigate(['auth/register'])
  }

  openSchedule() {
    this.router.navigate(['user/schedule'])
  }
}
