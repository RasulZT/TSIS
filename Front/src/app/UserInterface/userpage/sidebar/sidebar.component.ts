import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private router: Router) {
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
}
