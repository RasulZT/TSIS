import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
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
  @Input()label!:string;
  @Input() options!: Options[];
  @ViewChild("textDropdown") textDropdown!: ElementRef;

  ngOnInit() {
    this.options.forEach((opt) => {
      opt.isActive = false;
    });
    // this.options.splice(0, 0, {value: '', isActive: true});
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
    let style: string = `width:${this.textDropdown?.nativeElement.offsetWidth}px;
    left:${this.textDropdown?.nativeElement.offsetLeft + this.textDropdown?.nativeElement.offsetWidth / 2}px;
    top:${this.textDropdown?.nativeElement.offsetTop + this.textDropdown?.nativeElement.offsetHeight}px;`
    return style
  }


  @HostListener('document:mouseup',['$event'])
  onDropdownOutClick(event:any){
    const clickInside=this.textDropdown.nativeElement.contains(event.target);
    if(!clickInside){
      this.isDropDownOpen=false
    }
  }
}
