import {Component, OnInit} from '@angular/core';
import {Options} from "../../core/interfaces/options";
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages: any[] = []

  constructor(private router: Router,private scroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.initPages()
  }

  private initPages() {
    this.pages = [
      {
        label: "Программы обучения", isDropdawn: true, isActive: false, items: [
          {value: "Page 1"},
          {value: "Page 2"},
          {value: "Page 3"},
          {value: "Page 4"},
        ]
      },
      {label: "О нас", isDropdawn: false, isActive: false, refss: "#header"},
      {label: "Блог", isDropdawn: false, isActive: false},
      {label: "Контакты", isDropdawn: false, isActive: false, refss: "#footer"},
    ]
  }

  changeActive(i: number) {
    this.pages.forEach(item => {
      item.isActive = false
    })
    this.pages[i].isActive = true
  }


  goToLogin() {
    this.router.navigate(['auth/login'])
  }

  goToRegister() {
    this.router.navigate(['auth/register'])
  }

  goToMain() {
    this.router.navigate([''])
    this.scroller.scrollToAnchor("header");

  }
}
