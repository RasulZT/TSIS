import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit{
  constructor(private authServise:AuthService) {
  }
  ngOnInit(): void {
    this.authServise.getUser();

  }

}
