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
  public optionsList2: Options[] = [
    { value: 'Bitter Gourd' },
    { value: 'Pumpkin' },
    { value: 'Bottle Gourd' },
  ];
  private initPages() {
    this.pages = [
      {label: "Курсы", isDropdawn: false, isActive: true},
      {
        label: "Программы обучения", isDropdawn: true, isActive: false, items: [
          {label: "Page 1"},
          {label: "Page 2"},
          {label: "Page 3"},
          {label: "Page 4"},
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
