import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss']
})
export class DeleteCourseComponent implements OnInit{
  courses: any[] = []
  upd: boolean = false;
  id: number = 0;
  selectedCourses: number[] = [];

  constructor(private authService: AuthService,
              private router: Router, private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res: any) => {
      this.courses = res;
    })
  }

  goBack(){
    this.router.navigate(["/add"])
  }


  selectedID(id: number) {
    if (this.selectedCourses.includes(id)) {
      this.selectedCourses = this.selectedCourses.filter(selectedCourse => selectedCourse !== id);
    } else {
      this.selectedCourses.push(id);
    }
  }

  deleteCourses() {
    for(let i of this.selectedCourses){
      this.courseService.deleteCourse(i);
    }

    this.goBack();
  }
}
