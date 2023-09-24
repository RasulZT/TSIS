import {Component, OnInit} from '@angular/core';
import {Options} from "../../core/interfaces/options";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages: any[] = []

  constructor() {
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
      {label: "Work", isDropdawn: false, isActive: false,},
      {label: "Blog", isDropdawn: false, isActive: false,},
      {label: "Contact", isDropdawn: false, isActive: false,},
    ]
  }

  changeActive(i: number) {
    this.pages.forEach(item => {
      item.isActive = false
    })
    this.pages[i].isActive = true
  }
}
