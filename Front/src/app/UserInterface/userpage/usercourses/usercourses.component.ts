import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {TargetElementsService} from "../../../services/target-elements.service";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-usercourses',
  templateUrl: './usercourses.component.html',
  styleUrls: ['./usercourses.component.scss']
})
export class UsercoursesComponent implements OnInit {
  role: any;

  constructor(private router: Router, private scroller: ViewportScroller,
              private authServise: AuthService, private targetElementsService: TargetElementsService,
              private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.authServise.role$.subscribe(value => {
      this.role = value
    })
  }


}
