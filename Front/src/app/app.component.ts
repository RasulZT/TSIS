import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {TargetElementsService} from "./services/target-elements.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front';
  checkLogin: any;

  constructor(private authService: AuthService,private targetElementsService: TargetElementsService) {
    this.targetElementsService.targetElements.push({ id: 'header', selector: '#header' });
  }

  ngOnInit(): void {
  }

}
