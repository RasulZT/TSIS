import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit{
  addStudentForm = new FormGroup({
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

  registerStudent() {
    let data = this.addStudentForm.value;
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


  get name(){
    return this.addStudentForm.get('name')
  }

  get username(){
    return this.addStudentForm.get('username')
  }

  get password(){
    return this.addStudentForm.get('password')
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
