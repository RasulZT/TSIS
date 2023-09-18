import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Options} from "../../core/interfaces/options";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'my_dropdown',
  templateUrl: './mydropdown.component.html',
  styleUrls: ['./mydropdown.component.scss']
})
export class MydropdownComponent implements OnInit {
  constructor() {
  }

  public isDropDownOpen: boolean = false;
  public dropdown: string = '';

  @Input() options!: Options[];
  @ViewChild("dropdownDiv") dropdownDiv!: ElementRef;

  ngOnInit() {
    this.options.forEach((opt) => {
      opt.isActive = false;
    });
    this.options.splice(0, 0, {value: '', isActive: true});
  }

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  selectOption(evt: any, optionIndex: number) {
    this.options.forEach((opt: any, index: number) => {
      opt.isActive = optionIndex === index;
    });
    this.dropdown = evt.target.innerHTML;
  }

  getDropdownStyle() {
    let style: string = `width:${this.dropdownDiv?.nativeElement.offsetWidth}px;
    left:${this.dropdownDiv?.nativeElement.offsetLeft + this.dropdownDiv?.nativeElement.offsetWidth / 2}px;
    top:${this.dropdownDiv?.nativeElement.offsetTop + this.dropdownDiv?.nativeElement.offsetHeight}px;`
    return style
  }
}
