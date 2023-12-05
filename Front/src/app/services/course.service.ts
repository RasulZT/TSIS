import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../core/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCourses() {
    return this.http.get(BASE_URL + 'user/courses')
  }

  getLessonsByCourse(courseId: number) {
    return this.http.get(BASE_URL + `user/courses/${courseId}/lessons`)
  }

  getLessonInfo(lessonID: number) {
    return this.http.get(BASE_URL + `user/courses/` + lessonID)
  }

  addLesson(courseId: number, data: any) {
    return this.http.post(BASE_URL + `user/courses/${courseId}/lessons`, data)
  }

  postCourse(data: any){
    this.http.post('http://127.0.0.1:8000/' + 'user/courses/', data).subscribe((response: any) => {},
        error => {
      alert("Произошла ошибка. Попробуйте заново");
      console.log(error)
    })
  }

  putCourse(id: number, data: any){
    this.http.put('http://127.0.0.1:8000/' + `user/courses/${id}/`, data).subscribe((response: any) => {},
      error => {
        alert("Произошла ошибка. Попробуйте заново");
        console.log(error)
      })
  }

  deleteCourse(id: number){
    this.http.delete('http://127.0.0.1:8000/' + `user/courses/${id}/`).subscribe((response: any) => {},
      error => {
        alert("Произошла ошибка. Попробуйте заново");
        console.log(error)
      })
  }

}
