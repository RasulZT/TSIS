import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit{
  addTeacherForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })
  courses: any[] = [];
  selectedCourses: any[] = [];

  constructor(private authService: AuthService,
              private router: Router, private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res: any) => {
      this.courses = res;
    })
  }

  get name(){
    return this.addTeacherForm.get('name')
  }

  get username(){
    return this.addTeacherForm.get('username')
  }

  get password(){
    return this.addTeacherForm.get('password')
  }

  registerTeacher() {
    let data = this.addTeacherForm.value
    console.log(this.selectedCourses)

    this.authService.register(data)
      .subscribe(response => {
        let userId = response.userId;

        this.authService.setCourses(userId, this.selectedCourses)
          .subscribe(coursesResponse => {},
            error => {
            });
      }, error => {});
  }

  updateSelectedCourses(id: number) {
    if (this.selectedCourses.includes(id)) {
      this.selectedCourses = this.selectedCourses.filter(selectedCourse => selectedCourse !== id);
    } else {
      this.selectedCourses.push(id);
    }
  }

  goBack() {
    this.router.navigate(["/add"])
  }


}
