import {Component, OnInit} from '@angular/core';
import {Options} from "../../core/interfaces/options";
import {NavigationEnd, Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {filter} from "rxjs";
import {TargetElementsService} from "../../services/target-elements.service";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages: any[] = []
  userLoggedIn: any;
  routerPath = "";
  courses: any[] = [];
  role: any;

  coursesName: { value: string }[] = [];


  constructor(private router: Router, private scroller: ViewportScroller,
              private authServise: AuthService, private targetElementsService: TargetElementsService,
              private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.getCourses()
    this.initPages()
    this.authServise.role$.subscribe(value => {
      this.role = value
    })
    this.authServise.loggedIn$.subscribe(value => {
      this.userLoggedIn = value
    })
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.routerPath = event.url
      console.log(event.url)
    });


  }

  scrollToTarget(id: string) {
    const targetElement = this.targetElementsService.targetElements.find(element => element.id === id);
    if (targetElement) {
      const element = document.querySelector(targetElement.selector);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }

  private initPages() {
    this.pages = [
      {
        label: "Программы обучения", isDropdawn: true, isActive: false, items: this.coursesName
      },
      {label: "О нас", isDropdawn: false, isActive: false, refss: "header"},
      {label: "Блог", isDropdawn: false, isActive: false},
      {label: "Контакты", isDropdawn: false, isActive: false, refss: "footer"},
    ]
  }

  changeActive(i: number) {
    this.pages.forEach(item => {
      item.isActive = false
    })
    this.pages[i].isActive = true
  }

  goToLogin() {
    if (!this.userLoggedIn) {
      this.router.navigate(['auth/login'])
    } else
      this.router.navigate(['user'])
  }

  goToRegister() {
    this.router.navigate(['auth/register'])
  }

  goToMain() {
    this.router.navigate([''])
    this.scroller.scrollToAnchor("header");

  }

  getCourses() {
    this.courseService.getCourses().subscribe((res: any) => {
      this.courses = res;

      this.courses.forEach((course: any) => {
        this.coursesName.push({value: course?.name});
      })
      // console.log(this.coursesName);
    })

  }


  protected readonly toString = toString;
}
