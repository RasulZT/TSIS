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
}
