import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements  OnInit{
  constructor(private authService:AuthService) {

  }
  ngOnInit(): void {
    this.authService.getUser();
  }

}
